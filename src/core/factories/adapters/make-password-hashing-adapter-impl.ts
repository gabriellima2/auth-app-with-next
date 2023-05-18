import { PasswordHashingAdapterImpl } from "@/core/adapters";

export const makePasswordHashingAdapterImpl = () =>
	new PasswordHashingAdapterImpl();
