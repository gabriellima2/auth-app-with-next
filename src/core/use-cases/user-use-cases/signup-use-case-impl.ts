import {
	UserRepository,
	SignUpUseCase,
	SignUpUseCaseProtocols,
	ValidationDefaultReturn,
	APIError,
	PasswordHashingAdapter,
} from "@/core/entities";
import { HttpStatusCode } from "@/core/helpers/http-status-code";

export class SignUpUseCaseImpl implements SignUpUseCase {
	constructor(
		private readonly repository: UserRepository,
		private readonly passwordHashingAdapter: PasswordHashingAdapter,
		private readonly validate: (
			params: SignUpUseCaseProtocols.Params
		) => ValidationDefaultReturn
	) {}

	async execute(
		params: SignUpUseCaseProtocols.Params
	): Promise<SignUpUseCaseProtocols.Return> {
		const { message } = this.validate(params);
		if (message) throw new APIError(message, HttpStatusCode.unauthorized);

		const encryptedPassword = await this.passwordHashingAdapter.hash({
			password: params.password,
		});
		if (!encryptedPassword)
			throw new APIError(
				"An error occurred while encrypting the password",
				HttpStatusCode.serverError
			);
		const createdUser = await this.repository.create({
			...params,
			password: encryptedPassword,
		});
		if (!createdUser)
			throw new APIError(
				"An error occurred while creating user",
				HttpStatusCode.serverError
			);
		return createdUser;
	}
}
