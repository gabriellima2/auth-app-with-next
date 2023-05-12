import { z } from "zod";

import { ValidationError } from "@/app/core/errors";
import {
	GenericEmailContraint,
	GenericPasswordContraint,
} from "./generic-contraints";

export const signUpSchema = z.object({
	username: z
		.string()
		.nonempty({ message: "O nome de usuário é obrigatório" })
		.max(40, {
			message: "O nome de usuário ultrapassou o limite de 40 caracteres",
		}),
	email: GenericEmailContraint,
	password: GenericPasswordContraint,
});

export type SignUpFields = z.infer<typeof signUpSchema>;

type SignUpValidationParams = SignUpFields;

export function signUpValidation(
	credentials: SignUpValidationParams
): ValidationError {
	const validated = signUpSchema.safeParse(credentials);
	if (validated.success) return { message: undefined };
	return { message: validated.error.issues[0].message };
}
