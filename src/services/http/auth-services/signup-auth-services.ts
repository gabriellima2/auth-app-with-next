import { UserDTOInput, UserSignUpDTOOutput } from "@/core/dtos";
import { BASE_API_URL } from "@/constants/base-api-url";

export class SignUpAuthServices {
	constructor(private readonly endpoint: string) {}

	async post(userCredentials: UserDTOInput): Promise<UserSignUpDTOOutput> {
		const url = `${BASE_API_URL}${this.endpoint}`;
		const response = await fetch(url, {
			method: "POST",
			body: JSON.stringify(userCredentials),
		});
		const data: UserSignUpDTOOutput = await response.json();
		return data;
	}
}
