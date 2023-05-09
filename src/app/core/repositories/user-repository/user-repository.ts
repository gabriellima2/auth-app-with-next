import { UserDTOInput, UserSignUpDTOOutput } from "@/app/core/dtos/user-dtos";

export interface IUserRepository {
	add(user: UserDTOInput): Promise<UserSignUpDTOOutput>;
}
