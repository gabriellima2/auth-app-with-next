import { UserDTOInput, UserSignUpDTOOutput } from "@/app/core/dtos/user-dtos";

export interface IUserRepository {
	insert(user: UserDTOInput): UserSignUpDTOOutput | undefined;
}
