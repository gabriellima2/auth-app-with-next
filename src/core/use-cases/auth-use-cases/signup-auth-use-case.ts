import { UserSignUpDTOInput, UserSignUpDTOOutput } from "@/core/dtos";

export interface ISignUpAuthUseCase {
	execute(user: UserSignUpDTOInput): Promise<UserSignUpDTOOutput>;
}
