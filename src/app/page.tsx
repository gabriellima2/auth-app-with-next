import { CenterFullScreen, SignUpAuthForm } from "./components";

export default function Home() {
	return (
		<CenterFullScreen className="flex-col gap-20">
			<h1 className="font-semibold text-3xl">
				Cadastre-se <span className="opacity-70">para continuar</span>
			</h1>
			<SignUpAuthForm />
		</CenterFullScreen>
	);
}
