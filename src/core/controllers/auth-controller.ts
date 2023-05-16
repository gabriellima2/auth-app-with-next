import { makeSignUpAuthUseCaseImpl } from "../factories/use-cases/auth-use-cases";

import type { UserSignUpDTOInput } from "../dtos";
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
}
