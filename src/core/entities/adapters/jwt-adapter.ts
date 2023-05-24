import { UserEntity } from "../user-entity";

export interface JWTAdapter {
	create(
		params: JWTAdapterCreateProtocols.Params
	): Promise<JWTAdapterCreateProtocols.Return>;
	verify(
		params: JWTAdapterVerifyProtocols.Params
	): Promise<JWTAdapterVerifyProtocols.Return>;
}

export namespace JWTAdapterCreateProtocols {
	export type Params = Pick<UserEntity, "id" | "username">;
	export type Return = string;
}

export namespace JWTAdapterVerifyProtocols {
	export type Params = { token: string };
	export type Return = JWTAdapterCreateProtocols.Params | undefined;
}
