import { UserEntity } from "../../user-entity";

export interface SignUpUseCase {
	execute(
		params: SignUpUseCaseProtocols.Params
	): Promise<SignUpUseCaseProtocols.Return>;
}

export namespace SignUpUseCaseProtocols {
	export type Params = Pick<UserEntity, "username" | "email" | "password">;
	export type Return = Pick<UserEntity, "id" | "username" | "email">;
}
