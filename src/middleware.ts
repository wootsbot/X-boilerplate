import { type NextRequest, NextResponse } from "next/server";

import { auth } from "#/lib/auth";

// example of a middleware that checks if the user is authenticated
export const config = {
  matcher: ["/login", "/authjs"],
};

export async function middleware(request: NextRequest) {
  const session = await auth();
  const isAuthPage = request.nextUrl.pathname.startsWith("/login");

  if (isAuthPage) {
    if (session) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return null;
  }

  if (!session) {
    let from = request.nextUrl.pathname;

    if (request.nextUrl.search) {
      from += request.nextUrl.search;
    }

    // if this an API request, respond with JSON
    if (request.nextUrl.pathname.startsWith("/api/auth")) {
      return new NextResponse(JSON.stringify({ error: { message: "authentication required" } }), { status: 401 });
    }

    return NextResponse.redirect(new URL(`/login?from=${encodeURIComponent(from)}`, request.url));
  }
}
