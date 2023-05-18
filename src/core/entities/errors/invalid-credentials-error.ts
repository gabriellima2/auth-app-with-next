import { APIError } from "./api-error";
import { HttpStatusCode } from "@/core/helpers/http-status-code";

export class InvalidCredentialsError extends APIError {
	constructor() {
		super(
			"Invalid credentials, check spelling and try again",
			HttpStatusCode.unauthorized
		);
	}
}
