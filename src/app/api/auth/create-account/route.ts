import { makeAuthController } from "@/app/core/factories/controllers";

export async function POST(request: Request) {
	const authController = makeAuthController();
	return await authController.signUp(request);
}
