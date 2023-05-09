import { ISignUp } from "../sign-up";

import { UserDTOInput, UserSignUpDTOOutput } from "@/app/core/dtos/user-dtos";

import { DefaultError } from "@/app/core/errors/default-error";
import { IUserRepository } from "@/app/core/repositories/user-repository/user-repository";

export class SignUpImpl implements ISignUp {
	constructor(
		private readonly authRepository: IUserRepository,
		private readonly encryptPassword: (password: string) => string | null,
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
