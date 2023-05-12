export async function POST(request: Request) {
	const userCredentials = await request.json();
	return new Response("Criar uma conta");
}
