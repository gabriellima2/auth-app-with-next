"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { BaseForm, Field } from "../common";

import {
	signUpSchema,
	SignUpFields,
} from "@/app/core/validations/user-validations";
import { makeSignUpAuthServices } from "@/app/factories/services/http";

export const SignUpAuthForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFields>({ resolver: zodResolver(signUpSchema) });
	const signUpServices = makeSignUpAuthServices("api/auth/create-account");

	const handleSignUpAuth = async (credentials: SignUpFields) => {
		const response = await signUpServices.post(credentials);
	};

	return (
		<BaseForm
			handleSubmit={handleSubmit(handleSignUpAuth)}
			button={{ text: "Criar", title: "Criar conta" }}
			link={{
				href: "/login",
				text: "Já tenho uma conta",
				title: "Entrar na sua conta",
			}}
		>
			<Field
				labelText="Nome de usuário"
				id="username"
				type="text"
				placeholder="Ex: anonymous123"
				errorMessage={errors.username?.message}
				required
				{...register("username")}
			/>
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
