import {
	makeSignInAuthUseCaseImpl,
	makeSignUpAuthUseCaseImpl,
} from "../factories/use-cases/auth-use-cases";

import type { UserSignInDTOInput, UserSignUpDTOInput } from "../dtos";
import { APIError } from "../errors";

export class AuthController {
	async signUp(request: Request): Promise<Response> {
		const credentials = await request.json();
		try {
			const createdUser = await makeSignUpAuthUseCaseImpl().execute(
				credentials as UserSignUpDTOInput
			);
			return new Response(JSON.stringify(createdUser), { status: 201 });
		} catch (err) {
			return new Response((err as APIError).message, {
				status: err instanceof APIError ? (err as APIError).statusCode : 500,
			});
		}
	}

	async signIn(request: Request): Promise<Response> {
		const credentials = await request.json();
		try {
			const loggedUser = await makeSignInAuthUseCaseImpl().execute(
				credentials as UserSignInDTOInput
			);
			return new Response(JSON.stringify(loggedUser), { status: 200 });
		} catch (err) {
			return new Response((err as APIError).message, {
				status: err instanceof APIError ? (err as APIError).statusCode : 500,
			});
		}
	}
}
