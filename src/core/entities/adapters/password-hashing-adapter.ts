export interface PasswordHashingAdapter {
	hash(
		params: PasswordHashingAdapterHashProtocols.Params
	): Promise<PasswordHashingAdapterHashProtocols.Return>;
	compare(
		params: PasswordHashingAdapterCompareProtocols.Params
	): Promise<PasswordHashingAdapterCompareProtocols.Return>;
}

export namespace PasswordHashingAdapterHashProtocols {
	export type Params = {
		password: string;
	};
	export type Return = string | null;
}

export namespace PasswordHashingAdapterCompareProtocols {
	export type Params = {
		password: string;
		hash: string;
	};
	export type Return = boolean | null;
}
