import { SignUpUseCaseProtocols } from "@/core/entities";
import { BASE_API_URL } from "@/constants/base-api-url";

export class SignUpAuthServices {
	constructor(private readonly endpoint: string) {}

	async post(
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
