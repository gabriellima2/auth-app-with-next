import { z } from "zod";

import { ValidationDefaultReturn } from "@/core/entities";
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
): ValidationDefaultReturn {
	const validated = signInSchema.safeParse(params);
	if (validated.success) return { message: undefined };
	return { message: validated.error.issues[0].message };
}
