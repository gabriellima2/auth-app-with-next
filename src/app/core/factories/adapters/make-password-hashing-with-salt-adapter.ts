import { PasswordHashingWithSaltAdapterIml } from "../../adapters";

export const makePasswordHashingWithSaltAdapter = () =>
	new PasswordHashingWithSaltAdapterIml();
