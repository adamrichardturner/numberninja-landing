import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const oobCode = url.searchParams.get("oobCode")

  // Check if the route is the email verification page and if the oobCode parameter is present
  if (url.pathname === "/verify" && !oobCode) {
    // Redirect to the homepage if the oobCode is missing
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/verify"],
}
