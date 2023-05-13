import { ContainerForm, SignInForm } from "../components";

export default function Login() {
	return (
		<ContainerForm userAction="Entre">
			<SignInForm />
		</ContainerForm>
	);
}
