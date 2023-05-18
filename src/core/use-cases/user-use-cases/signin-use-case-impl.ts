import {
	PasswordHashingAdapter,
	UserRepository,
	APIError,
	SignInUseCase,
	JWTAdapter,
	SignInUseCaseProtocols,
	ValidationDefaultReturn,
} from "@/core/entities";
import { HttpStatusCode } from "@/core/helpers/http-status-code";

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
		if (message) throw new APIError(message, HttpStatusCode.unauthorized);

		const userFound = await this.repository.getByEmail({
			email: params.email,
		});
		if (!userFound)
			throw new APIError("User not found", HttpStatusCode.notFound);

		const isSamePassword = await this.passwordHashingAdapter.compare({
			password: params.password,
			hash: userFound.password,
		});
		if (isSamePassword === null)
			throw new APIError(
				"An error occurred when comparing the password",
				HttpStatusCode.serverError
			);
		if (!isSamePassword)
			throw new APIError("Incorrect password", HttpStatusCode.unauthorized);

		const token = this.jwtAdapter.create({
			id: userFound.id,
			username: userFound.username,
		});
		if (!token)
			throw new APIError(
				"An error occurred while generating the token",
				HttpStatusCode.serverError
			);
		return {
			id: userFound.id,
			email: userFound.email,
			username: userFound.username,
			token,
		};
	}
}
