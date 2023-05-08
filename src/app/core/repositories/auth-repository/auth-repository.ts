import { UserDTOInput, UserSignUpDTOOutput } from "@/app/core/dtos/user-dtos";

export interface IAuthRepository {
	add(user: UserDTOInput): Promise<UserSignUpDTOOutput>;
}
