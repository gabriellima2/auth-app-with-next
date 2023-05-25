import { NextRequest, NextResponse } from "next/server";

import { EmptyUserTokenError, InvalidUserTokenError } from "./core/entities";

import { USER_TOKEN } from "./constants/user-token";
import { makeJWTAdapterImpl } from "./core/factories/adapters/make-jwt-adapter-impl";

const jwtAdapterImpl = makeJWTAdapterImpl();
const PATHNAMES = {
	ROOT: "/",
	HOME: "/home",
	LOGIN: "/login",
};

export async function middleware(request: NextRequest) {
	const token = request.cookies.get(USER_TOKEN)?.value;
	const currentUrl = request.url;
	const isAuthPath =
		currentUrl.endsWith(PATHNAMES.ROOT) || currentUrl.endsWith(PATHNAMES.LOGIN);

	try {
		if (!token) throw new EmptyUserTokenError()
		const decodedJwt = await jwtAdapterImpl.verify({ token });
		if (!decodedJwt) throw new InvalidUserTokenError();
		if (isAuthPath)
			return NextResponse.redirect(new URL(PATHNAMES.HOME, currentUrl));

		return NextResponse.next();
	} catch (err) {
		if (currentUrl.endsWith(PATHNAMES.ROOT)) return NextResponse.next();
		if (!currentUrl.endsWith(PATHNAMES.LOGIN))
			return NextResponse.redirect(new URL(PATHNAMES.LOGIN, currentUrl));
	}
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
