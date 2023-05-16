import { SignInAuthUseCase } from "../signin-auth-use-case";

import {
	UserSignInDTOInput,
	UserSignInDTOOutput,
	UserJWTInputDTO,
	UserJWTOutputDTO,
} from "@/core/dtos";
import { IUserRepository } from "@/core/repositories/user-repository";

import { APIError, ValidationError } from "@/core/errors";
import { HttpStatusCode } from "@/core/helpers/http-status-code";

export class SignInAuthUseCaseImpl implements SignInAuthUseCase {
	constructor(
		private readonly repository: IUserRepository,
		private readonly comparePassword: (
			password: string,
			hash: string
		) => Promise<boolean>,
		private readonly validateCredentials: (
			user: UserSignInDTOInput
		) => ValidationError,
		private readonly genJWT: (payload: UserJWTInputDTO) => UserJWTOutputDTO
	) {}

	async execute(credentials: UserSignInDTOInput): Promise<UserSignInDTOOutput> {
		const { message } = this.validateCredentials(credentials);
		if (message) throw new APIError(message, HttpStatusCode.unauthorized);

		const credentialsFromDB = await this.repository.getByEmail(
			credentials.email
		);
		if (!credentialsFromDB)
			throw new APIError("User not found", HttpStatusCode.notFound);

		const isSamePassword = this.comparePassword(
			credentials.password,
			credentialsFromDB.password
		);
		if (!isSamePassword)
			throw new APIError("Incorrect password", HttpStatusCode.unauthorized);

		const token = await this.genJWT({
			id: credentialsFromDB.id,
			email: credentialsFromDB.email,
		});
		if (!token)
			throw new APIError(
				"An error occurred while generating the token",
				HttpStatusCode.serverError
			);
		return {
			id: credentialsFromDB.id,
			email: credentialsFromDB.email,
			username: credentialsFromDB.username,
			token,
		};
	}
}
