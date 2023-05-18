import { DatabaseError } from "pg";

import {
	CreateUserRepository,
	GetByEmailUserRepository,
	UserRepository,
	UserEntity,
	APIError,
} from "@/core/entities";

import { HttpStatusCode } from "@/core/helpers/http-status-code";
import { dbClient } from "@/services/db-client";

export class UserRepositoryImpl implements UserRepository {
	async create(
		params: CreateUserRepository.Params
	): Promise<CreateUserRepository.Return | undefined> {
		const { username, email, password } = params;
		try {
			const result = await dbClient.query<UserEntity>(
				"INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
				[username, email, password]
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
		params: GetByEmailUserRepository.Params
	): Promise<GetByEmailUserRepository.Return | undefined> {
		const { email } = params;
		try {
			const result = await dbClient.query<UserEntity>(
				"SELECT id, username, email, password FROM users WHERE email=($1)",
				[email]
			);
			const user = result.rows[0];
			if (!user) return undefined;
			return { ...user };
		} catch (err) {
			const message =
				err instanceof DatabaseError && err.detail
					? err.detail
					: (err as Error).message;

			throw new APIError(message, HttpStatusCode.serverError);
		}
	}
}
