import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const oobCode = url.searchParams.get("oobCode")

  if (url.pathname === "/verify" && !oobCode) {
    return NextResponse.redirect(new URL("/", request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/verify"],
}
