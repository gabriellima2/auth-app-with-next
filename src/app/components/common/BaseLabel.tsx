import type { LabelHTMLAttributes } from "react";

type BaseLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const BaseLabel = (props: BaseLabelProps) => {
	const { className } = props;
	return <label className={`text-sm font-medium ${className}`} {...props} />;
};
