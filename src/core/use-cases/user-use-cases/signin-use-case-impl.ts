import {
	PasswordHashingAdapter,
	UserRepository,
	SignInUseCase,
	JWTAdapter,
	SignInUseCaseProtocols,
	ValidationDefaultReturn,
	UserDoesNotExistError,
	PasswordVerificationError,
	InvalidCredentialsError,
	GenerateTokenError,
	ValidationError,
} from "@/core/entities";

export class SignInUseCaseImpl implements SignInUseCase {
	constructor(
		private readonly repository: UserRepository,
		private readonly passwordHashingAdapter: PasswordHashingAdapter,
		private readonly jwtAdapter: JWTAdapter,
		private readonly validate: (
			params: SignInUseCaseProtocols.Params
		) => ValidationDefaultReturn
	) {}

	async execute(
		params: SignInUseCaseProtocols.Params
	): Promise<SignInUseCaseProtocols.Return> {
		const { message } = this.validate(params);
		if (message) throw new ValidationError(message);

		const userFound = await this.repository.getByEmail({
			email: params.email,
		});
		if (!userFound) throw new UserDoesNotExistError();

		const isSamePassword = await this.passwordHashingAdapter.compare({
			password: params.password,
			hash: userFound.password,
		});
		if (isSamePassword === null) throw new PasswordVerificationError();
		if (!isSamePassword) throw new InvalidCredentialsError();

		const token = this.jwtAdapter.create({
			id: userFound.id,
			username: userFound.username,
		});
		if (!token) throw new GenerateTokenError();

		return {
			id: userFound.id,
			email: userFound.email,
			username: userFound.username,
			token,
		};
	}
}
