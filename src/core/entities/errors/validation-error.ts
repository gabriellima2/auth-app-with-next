import { APIError } from "./api-error";
import { HttpStatusCode } from "@/core/helpers/http-status-code";

export class ValidationError extends APIError {
	constructor(message: string) {
		super(message, HttpStatusCode.unauthorized);
	}
}
