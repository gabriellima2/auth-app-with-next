import { ISignUp } from "../sign-up";

import { UserDTOInput, UserSignUpDTOOutput } from "@/app/core/dtos/user-dtos";
import { APIError } from "@/app/core/errors/api-error";

import { ValidationError } from "@/app/core/errors/validation-error";
import { HttpStatusCode } from "@/app/core/helpers/http-status-code";
import { IUserRepository } from "@/app/core/repositories/user-repository/user-repository";

export class SignUpImpl implements ISignUp {
	constructor(
		private readonly authRepository: IUserRepository,
		private readonly encryptPassword: (password: string) => string | null,
		private readonly validateCredentials: (
			user: UserDTOInput
		) => ValidationError
	) {}

	async execute(user: UserDTOInput): Promise<UserSignUpDTOOutput> {
		const { message } = this.validateCredentials(user);
		if (message) throw new APIError(message, HttpStatusCode.unauthorized);

		const encryptedPassword = this.encryptPassword(user.password);
		if (!encryptedPassword)
			throw new APIError(
				"An error occurred while encrypting the password",
				HttpStatusCode.serverError
			);

		return {} as UserSignUpDTOOutput;
	}
}
