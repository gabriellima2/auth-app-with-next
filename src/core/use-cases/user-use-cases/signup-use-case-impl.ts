import {
	UserRepository,
	SignUpUseCase,
	SignUpUseCaseProtocols,
	ValidationDefaultReturn,
	PasswordHashingAdapter,
	ValidationError,
	PasswordEncryptionError,
	CreateUserError,
} from "@/core/entities";

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
		if (message) throw new ValidationError(message);

		const encryptedPassword = await this.passwordHashingAdapter.hash({
			password: params.password,
		});
		if (!encryptedPassword) throw new PasswordEncryptionError();

		const createdUser = await this.repository.create({
			...params,
			password: encryptedPassword,
		});
		if (!createdUser) throw new CreateUserError();

		return createdUser;
	}
}
