import { forwardRef } from "react";

import { BaseInput, type BaseInputProps } from "./BaseInput";
import { BaseLabel } from "./BaseLabel";

type FieldProps = BaseInputProps & {
	labelText: string;
};

export const Field = forwardRef<HTMLInputElement, FieldProps>((props, ref) => {
	const { id, labelText, ...rest } = props;
	const isRequired = !!rest.required;
	return (
		<fieldset className="border-none flex flex-col gap-2">
			<BaseLabel htmlFor={id}>
				{labelText}
				{isRequired && "*"}
			</BaseLabel>
			<BaseInput id={id} ref={ref} {...rest} />
		</fieldset>
	);
});

Field.displayName = "Field";
