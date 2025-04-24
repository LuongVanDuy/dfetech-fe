import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Tạo middleware i18n
const intlMiddleware = createMiddleware({
  ...routing,
});

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/auth") || pathname.startsWith("/admin")) {
    if (pathname.startsWith("/admin")) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      if (!token || (token.type !== "SYSTEM" && token.isSuperAdmin !== 1)) {
        return NextResponse.redirect(new URL("/auth/signin", req.url));
      }
    }

    return NextResponse.next();
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
