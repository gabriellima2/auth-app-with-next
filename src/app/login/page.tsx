import { CenterFullScreen, SignInAuthForm } from "../components";

export default function Login() {
	return (
		<CenterFullScreen className="flex-col gap-20">
			<h1 className="font-semibold text-3xl">
				Entre <span className="opacity-70">para continuar</span>
			</h1>
			<SignInAuthForm />
		</CenterFullScreen>
	);
}
