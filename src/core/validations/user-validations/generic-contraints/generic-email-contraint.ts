import { z } from "zod";

export const GenericEmailContraint = z
	.string()
	.email({ message: "Formato de e-mail inválido!" })
	.trim()
	.max(256, { message: "O e-mail ultrapassou o limite de 256 caracteres!" });
