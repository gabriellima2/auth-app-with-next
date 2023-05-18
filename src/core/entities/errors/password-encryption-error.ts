import { APIError } from "./api-error";
import { HttpStatusCode } from "@/core/helpers/http-status-code";

export class PasswordEncryptionError extends APIError {
	constructor() {
		super(
			"An error occurred while encrypting the password",
			HttpStatusCode.serverError
		);
	}
}
