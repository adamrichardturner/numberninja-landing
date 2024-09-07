import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const continueUrl = url.searchParams.get("continueUrl")

  if (url.pathname === "/verify" && !continueUrl) {
    // Redirect to the homepage if either redirect is missing
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/verify"],
}
