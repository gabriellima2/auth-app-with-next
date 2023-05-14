import { UserSignUpDTOInput, UserSignUpDTOOutput } from "@/app/core/dtos";

export interface ISignUpAuthUseCase {
	execute(user: UserSignUpDTOInput): Promise<UserSignUpDTOOutput>;
}
