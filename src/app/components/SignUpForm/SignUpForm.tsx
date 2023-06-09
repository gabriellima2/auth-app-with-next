"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useCreateAccount } from "./hooks/useCreateAccount";

import { BaseForm, Field } from "../common";

import {
	signUpSchema,
	SignUpFields,
} from "@/core/validations/user-validations";
import { makeSignUpAuthService } from "@/factories/services/http";

export const SignUpForm = () => {
	const signUpServices = makeSignUpAuthService("api/auth/create-account");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFields>({ resolver: zodResolver(signUpSchema) });
	const { createAccount, isCreatingAccount } = useCreateAccount<SignUpFields>({
		service: (params: SignUpFields) => signUpServices.execute(params),
	});

	return (
		<BaseForm
			handleSubmit={handleSubmit(createAccount)}
			button={{ text: "Criar", title: "Criar conta" }}
			isSubmitting={isCreatingAccount}
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
