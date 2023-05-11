import { UserDTOInput, UserSignUpDTOOutput } from "@/app/core/dtos";

import { PostgresHelper } from "../helpers/postgres-helper";
import { IUserRepository } from "../user-repository";

import { HttpStatusCode } from "@/app/core/helpers/http-status-code";
import { APIError } from "@/app/core/errors";

export class UserRepositoryImpl implements IUserRepository {
	async insert(user: UserDTOInput): Promise<UserSignUpDTOOutput | undefined> {
		const { client } = PostgresHelper;
		if (!client)
			throw new APIError("DB is offline", HttpStatusCode.serverError);
		try {
			const result = await client.query<UserSignUpDTOOutput>(
				"INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
				[user.username, user.email, user.password]
			);
			const createdUser = result.rows[0];
			return {
				id: createdUser.id,
				email: createdUser.email,
				username: createdUser.username,
			};
		} catch (err) {
			throw new APIError((err as Error).message, HttpStatusCode.serverError);
		}
	}
}
