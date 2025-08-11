import { NextRequest, NextResponse } from "next/server";

// Usage: /go?u=<encoded-destination>
export function GET(req: NextRequest) {
  const param = req.nextUrl.searchParams.get("u");
  if (!param) {
    return NextResponse.redirect(new URL("/", req.url), 302);
  }
  try {
    const dest = new URL(param);
    // (Optional): add click logging here later
    return NextResponse.redirect(dest.toString(), 302);
  } catch {
    return NextResponse.redirect(new URL("/", req.url), 302);
  }
}
