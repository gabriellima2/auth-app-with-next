"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLogin } from "./hooks/useLogin";

import { BaseForm, Field } from "../common";
import {
	signInSchema,
	SignInFields,
} from "@/core/validations/user-validations";
import { makeSignInAuthService } from "@/factories/services/http";

export const SignInForm = () => {
	const signInService = makeSignInAuthService("/api/auth/login");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInFields>({ resolver: zodResolver(signInSchema) });
	const { login, isLoggingIn } = useLogin<SignInFields>({
		redirectTo: "/private/home",
		service: (params: SignInFields) => signInService.execute(params),
	});

	return (
		<BaseForm
			handleSubmit={handleSubmit(login)}
			button={{ text: "Entrar", title: "Entrar na sua conta" }}
			isSubmitting={isLoggingIn}
			link={{
				href: "/",
				text: "Não tenho uma conta",
				title: "Criar uma conta",
			}}
		>
			<Field
				labelText="Email"
				id="email"
				type="email"
				placeholder="seuemail@gmail.com"
				errorMessage={errors.email?.message}
				required
				{...register("email")}
			/>
			<Field
				labelText="Senha"
				id="password"
				type="password"
				placeholder="Senha com 8 ou mais caracteres"
				errorMessage={errors.password?.message}
				required
				{...register("password")}
			/>
		</BaseForm>
	);
};
