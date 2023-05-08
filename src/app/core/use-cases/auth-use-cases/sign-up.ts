import { UserDTOInput, UserSignUpDTOOutput } from "../../dtos/user-dtos";

export interface ISignUp {
	execute(user: UserDTOInput): Promise<UserSignUpDTOOutput>;
}
