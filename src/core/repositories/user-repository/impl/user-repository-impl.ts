import { DatabaseError } from "pg";

import { UserDTOInput, UserDTOOutput } from "@/core/dtos";
import { IUserRepository } from "../user-repository";

import { HttpStatusCode } from "@/core/helpers/http-status-code";
import { APIError } from "@/core/errors";

import { dbClient } from "@/services/db-client";

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

	async getByEmail(
		email: string
	): Promise<(UserDTOInput & UserDTOOutput) | undefined> {
		throw new Error("Method not implemented");
	}
}
