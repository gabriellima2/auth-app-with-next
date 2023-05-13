import type { ReactNode } from "react";

import { FormTitle } from "./FormTitle";
import { CenterFullScreen } from "./common";

type FormContainerProps = {
	children: ReactNode;
	userAction: string;
};

export const FormContainer = (props: FormContainerProps) => {
	const { children, userAction } = props;
	return (
		<CenterFullScreen className="flex-col gap-20">
			<FormTitle action={userAction} description="para continuar" />
			{children}
		</CenterFullScreen>
	);
};
