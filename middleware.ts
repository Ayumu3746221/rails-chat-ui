import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAccessToken } from "@/utils/auth/getAccessToken";

export function middleware(request: NextRequest) {
  const publicPaths = ["/login", "/register"];
  if (publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get("accessToken");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
