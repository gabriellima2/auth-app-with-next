import { useState } from "react";

import { useToastContext } from "@/app/contexts/ToastContext";

import type { SignUpFields } from "@/core/validations/user-validations";
import type { SignUpUseCaseProtocols } from "@/core/entities";
import type { APIError } from "@/core/entities/errors";

type UseCreateAccountParams<Credentials> = {
	createAccount: (
		credentials: Credentials
	) => Promise<SignUpUseCaseProtocols.Return>;
};

type UseCreateAccountReturn<Credentials> = {
	onSubmit: (credentials: Credentials) => Promise<void>;
	isSubmitting: boolean;
};

export function useCreateAccount<Credentials extends SignUpFields>(
	params: UseCreateAccountParams<Credentials>
): UseCreateAccountReturn<Credentials> {
	const { createAccount } = params;

	const [isSubmitting, setIsSubmitting] = useState(false);
	const { notify } = useToastContext();

	const onSubmit = async (credentials: Credentials) => {
		setIsSubmitting(true);
		try {
			await createAccount(credentials);
			notify("success", "Usuário criado com sucesso");
		} catch (err) {
			notify("error", ((err as Error) || (err as APIError)).message);
		} finally {
			setIsSubmitting(false);
		}
	};

	return {
		onSubmit,
		isSubmitting,
	};
}
