import { ISignUpAuthUseCase } from "../signup-auth-use-case";

import { UserSignUpDTOInput, UserSignUpDTOOutput } from "@/app/core/dtos";
import { IUserRepository } from "@/app/core/repositories/user-repository";

import { APIError } from "@/app/core/errors";
import { ValidationError } from "@/app/core/errors";

import { HttpStatusCode } from "@/app/core/helpers/http-status-code";

export class SignUpAuthUseCaseImpl implements ISignUpAuthUseCase {
	constructor(
		private readonly authRepository: IUserRepository,
		private readonly encryptPassword: (
			password: string
		) => Promise<string | null>,
		private readonly validateCredentials: (
			user: UserSignUpDTOInput
		) => ValidationError
	) {}

	async execute(user: UserSignUpDTOInput): Promise<UserSignUpDTOOutput> {
		const { message } = this.validateCredentials(user);
		if (message) throw new APIError(message, HttpStatusCode.unauthorized);

		const encryptedPassword = await this.encryptPassword(user.password);
		if (!encryptedPassword)
			throw new APIError(
				"An error occurred while encrypting the password",
				HttpStatusCode.serverError
			);
		const createdUser = await this.authRepository.insert({
			...user,
			password: encryptedPassword,
		});
		if (!createdUser)
			throw new APIError(
				"An error occurred while creating user",
				HttpStatusCode.serverError
			);
		return createdUser;
	}
}
