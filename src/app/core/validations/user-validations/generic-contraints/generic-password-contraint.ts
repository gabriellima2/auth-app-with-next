import { z } from "zod";

export const GenericPasswordContraint = z
	.string()
	.trim()
	.nonempty({ message: "A senha é obrigatória" })
	.min(8, { message: "A senha deve ter no minímo 8 caracteres" })
	.max(50, { message: "A senha ultrapassou o limite de 50 caracteres!" });
