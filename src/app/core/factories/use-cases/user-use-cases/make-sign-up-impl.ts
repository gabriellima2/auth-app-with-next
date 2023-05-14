import { SignUpImpl } from "@/app/core/use-cases/user-use-cases";
import { signUpValidation } from "@/app/core/validations/user-validations";

import { makeUserRepositoryImpl } from "@/app/core/factories/repositories";
import { makePasswordHashingWithSaltAdapter } from "@/app/core/factories/adapters";

export const makeSignUpImpl = () =>
	new SignUpImpl(
		makeUserRepositoryImpl(),
		makePasswordHashingWithSaltAdapter().hash,
		signUpValidation
	);
