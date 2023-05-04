import { AuthFormContainer, SignInAuthForm } from "../components";

export default function Login() {
	return (
		<AuthFormContainer userAction="Entre">
			<SignInAuthForm />
		</AuthFormContainer>
	);
}
