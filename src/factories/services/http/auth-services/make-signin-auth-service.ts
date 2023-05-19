import { SignInAuthService } from "@/services/http";

export const makeSignInAuthService = (endpoint: string) =>
	new SignInAuthService(endpoint);
