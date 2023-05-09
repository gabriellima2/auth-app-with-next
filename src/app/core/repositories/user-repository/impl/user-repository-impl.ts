import { UserDTOInput, UserSignUpDTOOutput } from "@/app/core/dtos/user-dtos";
import { IUserRepository } from "../user-repository";

export class UserRepositoryImpl implements IUserRepository {
	add(user: UserDTOInput): Promise<UserSignUpDTOOutput> {
		throw new Error("Method not implemented.");
	}
}
