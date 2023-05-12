import { SignUpAuthServices } from "@/app/services/http/auth-services/signup-auth-services";

export const makeSignUpAuthServices = (endpoint: string) =>
	new SignUpAuthServices(endpoint);
