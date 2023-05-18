import { APIError } from "./api-error";
import { HttpStatusCode } from "@/core/helpers/http-status-code";

export class UserDoesNotExistError extends APIError {
	constructor() {
		super("User does not exist", HttpStatusCode.notFound);
	}
}
