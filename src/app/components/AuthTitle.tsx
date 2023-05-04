type AuthTitleProps = {
	action: string;
	description: string;
};

export const AuthTitle = (props: AuthTitleProps) => {
	const { action, description } = props;
	return (
		<h1 className="font-semibold text-3xl">
			{action} <span className="opacity-70">{description}</span>
		</h1>
	);
};
