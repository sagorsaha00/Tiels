import { NextResponse } from "next/server";
import { auth } from "./app/utils/auth";

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: request.headers,
    });
    const { pathname } = request.nextUrl;
    if (session && pathname === "/login") {
        return NextResponse.redirect(new URL("/", request.url));
    } else if (!session) {
        const loginUrl = new URL("/login", request.url);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/profile", "/update-profile", "/showProduct/:path*"],
};