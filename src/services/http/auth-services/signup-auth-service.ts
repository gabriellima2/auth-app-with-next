import { BASE_API_URL } from "@/constants/base-api-url";
import type { SignUpUseCaseProtocols } from "@/core/entities";

export class SignUpAuthService {
	constructor(private readonly endpoint: string) {}

	async execute(
		credentials: SignUpUseCaseProtocols.Params
	): Promise<SignUpUseCaseProtocols.Return> {
		const url = `${BASE_API_URL}${this.endpoint}`;
		const response = await fetch(url, {
			method: "POST",
			body: JSON.stringify(credentials),
		});
		const data: SignUpUseCaseProtocols.Return = await response.json();
		return data;
	}
}
