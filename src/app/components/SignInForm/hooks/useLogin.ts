import { useState } from "react";
import { useRouter } from "next/navigation";

import { useToastContext } from "@/app/contexts/ToastContext";

import type { SignInFields } from "@/core/validations/user-validations";
import type { APIError, SignInUseCaseProtocols } from "@/core/entities";

type UseLoginParams<Credentials> = {
	service: (credentials: Credentials) => Promise<SignInUseCaseProtocols.Return>;
	handleTokenStorage: (token: string) => void;
	redirectTo: string;
};

type UseLoginReturn<Credentials> = {
	login: (credentials: Credentials) => Promise<void>;
	isLoggingIn: boolean;
};

export function useLogin<Credentials extends SignInFields>(
	params: UseLoginParams<Credentials>
): UseLoginReturn<Credentials> {
	const { service, handleTokenStorage, redirectTo } = params;

	const [isLoggingIn, setIsLogginIn] = useState(false);
	const { notify } = useToastContext();
	const router = useRouter();

	const login = async (credentials: Credentials) => {
		setIsLogginIn(true);
		try {
			const response = await service(credentials);
			handleTokenStorage(response.token);
			router.push(redirectTo);
		} catch (err) {
			notify("error", ((err as Error) || (err as APIError)).message);
		} finally {
			setIsLogginIn(false);
		}
	};

	return {
		login,
		isLoggingIn,
	};
}
