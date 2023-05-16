import { SignUpAuthUseCaseImpl } from "@/core/use-cases/auth-use-cases";
import { signUpValidation } from "@/core/validations/user-validations";

import { makeUserRepositoryImpl } from "@/core/factories/repositories";
import { makePasswordHashingWithSaltAdapter } from "@/core/factories/adapters";

export const makeSignUpAuthUseCaseImpl = () =>
	new SignUpAuthUseCaseImpl(
		makeUserRepositoryImpl(),
		makePasswordHashingWithSaltAdapter().hash,
		signUpValidation
	);
