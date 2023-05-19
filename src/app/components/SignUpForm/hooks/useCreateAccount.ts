import { useState } from "react";

import { useToastContext } from "@/app/contexts/ToastContext";

import type { SignUpFields } from "@/core/validations/user-validations";
import type { SignUpUseCaseProtocols } from "@/core/entities";
import type { APIError } from "@/core/entities/errors";

type UseCreateAccountParams<Credentials> = {
	service: (credentials: Credentials) => Promise<SignUpUseCaseProtocols.Return>;
};

type UseCreateAccountReturn<Credentials> = {
	createAccount: (credentials: Credentials) => Promise<void>;
	isCreatingAccount: boolean;
};

export function useCreateAccount<Credentials extends SignUpFields>(
	params: UseCreateAccountParams<Credentials>
): UseCreateAccountReturn<Credentials> {
	const { service } = params;

	const [isCreatingAccount, setIsCreatingAccount] = useState(false);
	const { notify } = useToastContext();

	const createAccount = async (credentials: Credentials) => {
		setIsCreatingAccount(true);
		try {
			await service(credentials);
			notify("success", "Usuário criado com sucesso");
		} catch (err) {
			notify("error", ((err as Error) || (err as APIError)).message);
		} finally {
			setIsCreatingAccount(false);
		}
	};

	return {
		createAccount,
		isCreatingAccount,
	};
}
