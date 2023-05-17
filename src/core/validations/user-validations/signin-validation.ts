import { z } from "zod";

import { ValidationOutputDTO } from "@/core/dtos";
import {
	GenericEmailContraint,
	GenericPasswordContraint,
} from "./generic-contraints";

export const signInSchema = z.object({
	email: GenericEmailContraint,
	password: GenericPasswordContraint,
});

export type SignInFields = z.infer<typeof signInSchema>;

type SignInValidationParams = SignInFields;

export function signInValidation(
	params: SignInValidationParams
): ValidationOutputDTO {
	const validated = signInSchema.safeParse(params);
	if (validated.success) return { message: undefined };
	return { message: validated.error.issues[0].message };
}
