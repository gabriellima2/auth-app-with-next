import { signUpValidation } from "@/core/validations/user-validations";
import { SignUpUseCaseImpl } from "@/core/use-cases";

import { makeUserRepositoryImpl } from "@/core/factories/repositories";
import { makePasswordHashingAdapterImpl } from "../../adapters";

export const makeSignUpUseCaseImpl = () =>
	new SignUpUseCaseImpl(
		makeUserRepositoryImpl(),
		makePasswordHashingAdapterImpl(),
		signUpValidation
	);
