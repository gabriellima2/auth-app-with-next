import { useToastContext } from "@/app/contexts/ToastContext";

import type { SignUpFields } from "@/app/core/validations/user-validations";
import type { UserSignUpDTOOutput } from "@/app/core/dtos";
import type { APIError } from "@/app/core/errors";

type UseCreateAccountParams<Credentials> = {
	createAccount: (credentials: Credentials) => Promise<UserSignUpDTOOutput>;
};

type UseCreateAccountReturn<Credentials> = {
	onSubmit: (credentials: Credentials) => Promise<void>;
};

export function useCreateAccount<Credentials extends SignUpFields>(
	params: UseCreateAccountParams<Credentials>
): UseCreateAccountReturn<Credentials> {
	const { createAccount } = params;
	const { notify } = useToastContext();

	const onSubmit = async (credentials: Credentials) => {
		try {
			await createAccount(credentials);
			notify("success", "Usuário criado com sucesso");
		} catch (err) {
			notify("error", ((err as Error) || (err as APIError)).message);
		}
	};

	return {
		onSubmit,
	};
}
