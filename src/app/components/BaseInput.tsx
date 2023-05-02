import { type InputHTMLAttributes, forwardRef } from "react";

type BaseInputProps = InputHTMLAttributes<HTMLInputElement>;

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
	(props, ref) => {
		return (
			<input
				ref={ref}
				type="text"
				className={`w-full rounded p-3 bg-zinc-800 text-sm text-white placeholder:text-zinc-400  ${props.className}`}
				{...props}
			/>
		);
	}
);

BaseInput.displayName = "BaseInput";
