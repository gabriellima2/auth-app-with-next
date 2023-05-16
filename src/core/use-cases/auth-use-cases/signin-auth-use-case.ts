import { UserSignInDTOInput, UserSignInDTOOutput } from "@/core/dtos";

export interface SignInAuthUseCase {
	execute(credentials: UserSignInDTOInput): Promise<UserSignInDTOOutput>;
}
