import { UserEntity } from "../user-entity";

export interface JWTAdapter {
	create(
		params: JWTAdapterCreateProtocols.Params
	): Promise<JWTAdapterCreateProtocols.Return>;
}

export namespace JWTAdapterCreateProtocols {
	export type Params = Pick<UserEntity, "id" | "username">;
	export type Return = string;
}
