import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const redirect = url.searchParams.get("redirect")

  if (url.pathname === "/verify" && !redirect) {
    // Redirect to the homepage if either redirect is missing
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/verify"],
}
