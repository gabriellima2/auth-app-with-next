import { z } from "zod";

import { ValidationError } from "@/app/core/errors/validation-error";
import {
	GenericEmailContraint,
	GenericPasswordContraint,
} from "./generic-contraints";

const signUpSchema = z.object({
	username: z.string().nonempty().max(40, {
		message: "O nome de usuário ultrapassou o limite de 40 caracteres",
	}),
	email: GenericEmailContraint,
	password: GenericPasswordContraint,
});

type SignUpValidationParams = z.infer<typeof signUpSchema>;

export function signUpValidation(
	credentials: SignUpValidationParams
): ValidationError {
	const validated = signUpSchema.safeParse(credentials);
	if (validated.success) return { message: undefined };
	return { message: validated.error.issues[0].message };
}
