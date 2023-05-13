import type { ToastOptions, TypeOptions } from "react-toastify/dist/types";

export interface ToastProperties {
	notify: (type: TypeOptions, message: string, options?: ToastOptions) => void;
}
