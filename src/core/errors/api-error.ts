export class APIError extends Error {
	constructor(message: string, public readonly statusCode: number) {
		super(message);
	}
}
