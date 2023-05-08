import { UserDTOInput, UserSignUpDTOOutput } from "@/app/core/dtos/user-dtos";
import { ISignUp } from "../sign-up";

export class SignUpImpl implements ISignUp {
	async execute(user: UserDTOInput): Promise<UserSignUpDTOOutput> {
		return {} as UserSignUpDTOOutput;
	}
}
