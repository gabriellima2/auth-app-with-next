import { UserEntity } from "../../user-entity";

export interface SignInUseCase {
	execute(
		params: SignInUseCaseProtocols.Params
	): Promise<SignInUseCaseProtocols.Return>;
}

export namespace SignInUseCaseProtocols {
	export type Params = Pick<UserEntity, "email" | "password">;
	export type Return = Pick<UserEntity, "id" | "username" | "email"> & {
		token: string;
	};
}
