import { UserDTOInput, UserSignUpDTOOutput } from "@/app/core/dtos/user-dtos";
import { IAuthRepository } from "../auth-repository";

export class AuthRepositoryImpl implements IAuthRepository {
	add(user: UserDTOInput): Promise<UserSignUpDTOOutput> {
		throw new Error("Method not implemented.");
	}
}
