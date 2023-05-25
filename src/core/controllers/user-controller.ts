import {
	APIError,
	SignInUseCaseProtocols,
	SignUpUseCaseProtocols,
} from "../entities";
import {
	makeSignUpUseCaseImpl,
	makeSignInUseCaseImpl,
} from "../factories/use-cases";

import { USER_TOKEN } from "@/constants/user-token";

export class UserController {
	async signUp(request: Request): Promise<Response> {
		const credentials = await request.json();
		try {
			const createdUser = await makeSignUpUseCaseImpl().execute(
				credentials as SignUpUseCaseProtocols.Params
			);
			return new Response(JSON.stringify(createdUser), { status: 201 });
		} catch (err) {
			const error = { message: (err as APIError).message };
			return new Response(JSON.stringify(error), {
				status: err instanceof APIError ? (err as APIError).statusCode : 500,
			});
		}
	}

	async signIn(request: Request): Promise<Response> {
		const credentials = await request.json();
		try {
			const loggedUser = await makeSignInUseCaseImpl().execute(
				credentials as SignInUseCaseProtocols.Params
			);

			return new Response(JSON.stringify(loggedUser), {
				status: 200,
				headers: {
					"Set-Cookie": `${USER_TOKEN}=${loggedUser.token}; path=/; samesite=strict; httponly; secure;`,
				},
			});
		} catch (err) {
			const error = { message: (err as APIError).message };
			return new Response(JSON.stringify(error), {
				status: err instanceof APIError ? (err as APIError).statusCode : 500,
			});
		}
	}
}
