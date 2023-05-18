import { signInValidation } from "@/core/validations/user-validations";
import { SignInUseCaseImpl } from "@/core/use-cases";

import {
	makeJWTAdapterImpl,
	makePasswordHashingAdapterImpl,
} from "../../adapters";
import { makeUserRepositoryImpl } from "../../repositories";

export const makeSignInUseCaseImpl = () =>
	new SignInUseCaseImpl(
		makeUserRepositoryImpl(),
		makePasswordHashingAdapterImpl(),
		makeJWTAdapterImpl(),
		signInValidation
	);
