import { APIError } from "./api-error";
import { HttpStatusCode } from "@/core/helpers/http-status-code";

export class CreateUserError extends APIError {
	constructor() {
		super("An error occurred while creating user", HttpStatusCode.serverError);
	}
}
