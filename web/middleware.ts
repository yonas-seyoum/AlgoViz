import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // TODO: Read session and enforce role guards
  if (pathname.startsWith("/admin")) {
    // placeholder allow
    return NextResponse.next();
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/seek/:path*", "/recruiter/:path*"],
};
