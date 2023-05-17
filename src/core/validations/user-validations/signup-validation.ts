import { z } from "zod";

import { ValidationOutputDTO } from "@/core/dtos";
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
	params: SignUpValidationParams
): ValidationOutputDTO {
	const validated = signUpSchema.safeParse(params);
	if (validated.success) return { message: undefined };
	return { message: validated.error.issues[0].message };
}
