import { UserDTOInput, UserSignUpDTOOutput } from "@/app/core/dtos";

export interface ISignUp {
	execute(user: UserDTOInput): Promise<UserSignUpDTOOutput>;
}
