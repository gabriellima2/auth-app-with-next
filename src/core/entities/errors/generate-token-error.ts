import { APIError } from "./api-error";
import { HttpStatusCode } from "@/core/helpers/http-status-code";

export class GenerateTokenError extends APIError {
	constructor() {
		super(
			"An error occurred while generating the token",
			HttpStatusCode.serverError
		);
	}
}
