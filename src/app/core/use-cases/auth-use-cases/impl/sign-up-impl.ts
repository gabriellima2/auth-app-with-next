import { IAuthRepository } from "@/app/core/repositories/auth-repository/auth-repository";

import { UserDTOInput, UserSignUpDTOOutput } from "@/app/core/dtos/user-dtos";
import { DefaultError } from "@/app/core/errors/default-error";
import { ISignUp } from "../sign-up";

export class SignUpImpl implements ISignUp {
	constructor(
		private readonly authRepository: IAuthRepository,
		private readonly encryptPassword: (password: string) => Promise<string>,
		private readonly validate: (user: UserDTOInput) => DefaultError
	) {}

	async execute(user: UserDTOInput): Promise<UserSignUpDTOOutput> {
		return {} as UserSignUpDTOOutput;
	}
}
