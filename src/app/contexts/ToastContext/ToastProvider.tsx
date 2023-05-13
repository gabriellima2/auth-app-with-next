"use client";
import "react-toastify/dist/ReactToastify.css";
import { type ReactNode } from "react";
import {
	type ToastOptions,
	toast,
	ToastContainer,
	TypeOptions,
} from "react-toastify";

import { ToastContext } from "./ToastContext";

type ToastProviderProps = {
	children: ReactNode;
};

const DEFAULT_TOAST_OPTIONS: ToastOptions = {
	position: "top-right",
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "dark",
};

export const ToastProvider = (props: ToastProviderProps) => {
	const { children } = props;

	const notify = (
		type: TypeOptions,
		message: string,
		options?: ToastOptions
	) => {
		if (type !== "default")
			return toast[type](message, { ...DEFAULT_TOAST_OPTIONS, ...options });
		toast(message, { ...DEFAULT_TOAST_OPTIONS, ...options });
	};

	return (
		<ToastContext.Provider value={{ notify }}>
			<ToastContainer />
			{children}
		</ToastContext.Provider>
	);
};
