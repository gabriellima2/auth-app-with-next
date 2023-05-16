import { UserDTOInput, UserDTOOutput } from "@/core/dtos";

export interface IUserRepository {
	insert(user: UserDTOInput): Promise<UserDTOOutput | undefined>;
}
