import { PasswordHashingWithSaltAdapterIml } from "@/core/adapters";

export const makePasswordHashingWithSaltAdapter = () =>
	new PasswordHashingWithSaltAdapterIml();
