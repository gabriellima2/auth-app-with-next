import { SignUpAuthServices } from "@/services/http/auth-services";

export const makeSignUpAuthServices = (endpoint: string) =>
	new SignUpAuthServices(endpoint);
