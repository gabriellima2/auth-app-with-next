"use client";
import { useForm } from "react-hook-form";

import { BaseForm, Field } from "../common";

export const SignUpAuthForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	return (
		<BaseForm
			handleSubmit={handleSubmit((data) => console.log(data))}
			button={{ text: "Criar", title: "Criar conta" }}
		>
			<Field
				labelText="Nome de usuário"
				id="username"
				type="text"
				placeholder="Ex: anonymous123"
				required
				{...register("username")}
			/>
			<Field
				labelText="Email"
				id="email"
				type="email"
				placeholder="seuemail@gmail.com"
				required
				{...register("email")}
			/>
			<Field
				labelText="Senha"
				id="password"
				type="password"
				placeholder="Senha com 8 ou mais caracteres"
				required
				{...register("password")}
			/>
		</BaseForm>
	);
};
