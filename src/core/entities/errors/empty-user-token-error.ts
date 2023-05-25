import { APIError } from "./api-error";
import { HttpStatusCode } from "@/core/helpers/http-status-code";

export class EmptyUserTokenError extends APIError {
	constructor() {
		super("User token is empty", HttpStatusCode.unauthorized);
	}
}
