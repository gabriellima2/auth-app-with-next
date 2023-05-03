import { forwardRef } from "react";

import { BaseInput, type BaseInputProps } from "../BaseInput";
import { BaseLabel } from "../BaseLabel";
import { FieldError } from "./components";

type FieldProps = BaseInputProps & {
	labelText: string;
	errorMessage?: string;
};

export const Field = forwardRef<HTMLInputElement, FieldProps>((props, ref) => {
	const { id, labelText, errorMessage, ...rest } = props;
	const isRequired = !!rest.required;
	const fieldErrorID = `${id}-field-error`;

	return (
		<fieldset className="border-none flex flex-col gap-2">
			<BaseLabel htmlFor={id}>
				{labelText}
				{isRequired && "*"}
			</BaseLabel>
			<BaseInput
				id={id}
				aria-describedby={fieldErrorID}
				aria-invalid={!!errorMessage}
				ref={ref}
				{...rest}
			/>
			{errorMessage && <FieldError id={fieldErrorID} error={errorMessage} />}
		</fieldset>
	);
});

Field.displayName = "Field";
