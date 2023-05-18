import { makeUserController } from "@/core/factories/controllers";

export async function POST(request: Request) {
	const response = await makeUserController().signIn(request);
	return response;
}
