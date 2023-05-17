import { ISignUpAuthUseCase } from "../signup-auth-use-case";

import {
	UserSignUpDTOInput,
	UserSignUpDTOOutput,
	ValidationOutputDTO,
} from "@/core/dtos";
import { IUserRepository } from "@/core/repositories/user-repository";

import { APIError } from "@/core/errors";

import { HttpStatusCode } from "@/core/helpers/http-status-code";

export class SignUpAuthUseCaseImpl implements ISignUpAuthUseCase {
	constructor(
		private readonly authRepository: IUserRepository,
		private readonly encryptPassword: (
			password: string
		) => Promise<string | null>,
		private readonly validateCredentials: (
			user: UserSignUpDTOInput
		) => ValidationOutputDTO
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
