import jwt from "jsonwebtoken";

export class JWTAdapter<Payload extends {}> {
	create(payload: Payload) {
		const secretKey = process.env.SECRET_KEY_TO_GEN_JWT;
		if (!secretKey)
			throw new Error("No secret key has been defined to generate jwt");
		return jwt.sign(payload, secretKey, {
			expiresIn: 600, // 10 Minutos
		});
	}
}
