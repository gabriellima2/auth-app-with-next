import { UserDTOInput, UserDTOOutput } from "@/core/dtos";

export interface IUserRepository {
	insert(user: UserDTOInput): Promise<UserDTOOutput | undefined>;
	getByEmail(
		email: string
	): Promise<(UserDTOInput & UserDTOOutput) | undefined>;
}
