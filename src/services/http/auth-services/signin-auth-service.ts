import { BASE_API_URL } from "@/constants/base-api-url";
import type { SignInUseCaseProtocols } from "@/core/entities";

export class SignInAuthService {
	constructor(private readonly endpoint: string) {}

	async execute(
		credentials: SignInUseCaseProtocols.Params
	): Promise<SignInUseCaseProtocols.Return> {
		const url = `${BASE_API_URL}${this.endpoint}`;
		const response = await fetch(url, {
			method: "POST",
			body: JSON.stringify(credentials),
		});
		const data: SignInUseCaseProtocols.Return = await response.json();
		return data;
	}
}
