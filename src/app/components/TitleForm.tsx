type TitleFormProps = {
	action: string;
	description: string;
};

export const TitleForm = (props: TitleFormProps) => {
	const { action, description } = props;
	return (
		<h1 className="font-semibold text-3xl">
			{action} <span className="opacity-70">{description}</span>
		</h1>
	);
};
