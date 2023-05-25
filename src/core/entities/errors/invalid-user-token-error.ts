import { HttpStatusCode } from "@/core/helpers/http-status-code";
import { APIError } from "./api-error";

export class InvalidUserTokenError extends APIError {
	constructor() {
		super(
			"An error occurred, the user token is invalid",
			HttpStatusCode.unauthorized
		);
	}
}
