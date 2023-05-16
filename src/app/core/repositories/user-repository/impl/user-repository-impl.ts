import { DatabaseError } from "pg";

import { UserDTOInput, UserDTOOutput } from "@/app/core/dtos";
import { IUserRepository } from "../user-repository";

import { HttpStatusCode } from "@/app/core/helpers/http-status-code";
import { APIError } from "@/app/core/errors";

import { dbClient } from "@/app/services/db-client";

export class UserRepositoryImpl implements IUserRepository {
	async insert(user: UserDTOInput): Promise<UserDTOOutput | undefined> {
		try {
			const result = await dbClient.query<UserDTOOutput>(
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
			const message =
				err instanceof DatabaseError && err.detail
					? err.detail
					: (err as Error).message;

			throw new APIError(message, HttpStatusCode.serverError);
		}
	}
}
