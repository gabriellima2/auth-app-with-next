import { APIError } from "./api-error";
import { HttpStatusCode } from "@/core/helpers/http-status-code";

export class PasswordVerificationError extends APIError {
	constructor() {
		super(
			"An error occurred while verifying the password",
			HttpStatusCode.serverError
		);
	}
}
