import { SignUpAuthUseCaseImpl } from "@/app/core/use-cases/auth-use-cases";
import { signUpValidation } from "@/app/core/validations/user-validations";

import { makeUserRepositoryImpl } from "@/app/core/factories/repositories";
import { makePasswordHashingWithSaltAdapter } from "@/app/core/factories/adapters";

export const makeSignUpAuthUseCaseImpl = () =>
	new SignUpAuthUseCaseImpl(
		makeUserRepositoryImpl(),
		makePasswordHashingWithSaltAdapter().hash,
		signUpValidation
	);
