import { UserDTOInput, UserDTOOutput } from "@/app/core/dtos";

export interface IUserRepository {
	insert(user: UserDTOInput): Promise<UserDTOOutput | undefined>;
}
