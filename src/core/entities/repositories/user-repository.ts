import { UserEntity } from "../user-entity";

export interface UserRepository {
	create(
		user: CreateUserRepository.Params
	): Promise<CreateUserRepository.Return | undefined>;
	getByEmail(
		email: GetByEmailUserRepository.Params
	): Promise<GetByEmailUserRepository.Return | undefined>;
}

export namespace CreateUserRepository {
	export type Params = Pick<UserEntity, "username" | "email" | "password">;
	export type Return = Pick<UserEntity, "id" | "username" | "email">;
}

export namespace GetByEmailUserRepository {
	export type Params = Pick<UserEntity, "email">;
	export type Return = Omit<UserEntity, "token">;
}
