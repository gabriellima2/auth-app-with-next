import { makeAuthController } from "@/core/factories/controllers";

export async function POST(request: Request) {
	const response = await makeAuthController().signIn(request);
	return response;
}
