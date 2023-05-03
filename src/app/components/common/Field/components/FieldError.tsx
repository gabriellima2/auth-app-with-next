type FieldErrorProps = {
	error: string;
	id: string;
};

export const FieldError = (props: FieldErrorProps) => {
	const { error, id } = props;
	return (
		<small id={id} role="alert" className="text-red-400">
			{error}
		</small>
	);
};
