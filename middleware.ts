import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const oobCode = url.searchParams.get("oobCode")
  const redirect = url.searchParams.get("redirect")

  // Check if the route is the email verification page and if both oobCode and redirect parameters are present
  if (url.pathname === "/verify" && (!oobCode || !redirect)) {
    // Redirect to the homepage if either oobCode or redirect is missing
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/verify"],
}
