import { SignUpAuthService } from "@/services/http/auth-services";

export const makeSignUpAuthService = (endpoint: string) =>
	new SignUpAuthService(endpoint);
