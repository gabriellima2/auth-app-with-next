type FormTitleProps = {
	action: string;
	description: string;
};

export const FormTitle = (props: FormTitleProps) => {
	const { action, description } = props;
	return (
		<h1 className="font-semibold text-3xl">
			{action} <span className="opacity-70">{description}</span>
		</h1>
	);
};
