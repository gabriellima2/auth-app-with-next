import { SignInAuthUseCaseImpl } from "@/core/use-cases/auth-use-cases";
import { signInValidation } from "@/core/validations/user-validations";

import {
	makeJWTAdapter,
	makePasswordHashingWithSaltAdapter,
} from "@/core/factories/adapters";
import { makeUserRepositoryImpl } from "@/core/factories/repositories";

export const makeSignInAuthUseCaseImpl = () =>
	new SignInAuthUseCaseImpl(
		makeUserRepositoryImpl(),
		makePasswordHashingWithSaltAdapter().compare,
		signInValidation,
		makeJWTAdapter().create
	);
