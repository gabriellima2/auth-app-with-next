import { AuthFormContainer, SignUpAuthForm } from "./components";

export default function Home() {
	return (
		<AuthFormContainer userAction="Cadastre-se">
			<SignUpAuthForm />
		</AuthFormContainer>
	);
}
