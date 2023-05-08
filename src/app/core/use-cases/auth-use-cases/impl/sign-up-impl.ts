import { ISignUp } from "../sign-up";

import { EncryptedPasswordDTO } from "@/app/core/dtos/encrypted-password-dto";
import { UserDTOInput, UserSignUpDTOOutput } from "@/app/core/dtos/user-dtos";

import { DefaultError } from "@/app/core/errors/default-error";
import { IAuthRepository } from "@/app/core/repositories/auth-repository/auth-repository";

export class SignUpImpl implements ISignUp {
	constructor(
		private readonly authRepository: IAuthRepository,
		private readonly encryptPassword: (
			password: string
		) => EncryptedPasswordDTO | null,
		private readonly validateCredentials: (user: UserDTOInput) => DefaultError
	) {}

	async execute(user: UserDTOInput): Promise<UserSignUpDTOOutput> {
		const { message } = this.validateCredentials(user);
		if (message) throw new Error(message);

		const encryptedPassword = this.encryptPassword(user.password);
		if (!encryptedPassword)
			throw new Error("An error occurred while encrypting the password");

		return {} as UserSignUpDTOOutput;
	}
}
