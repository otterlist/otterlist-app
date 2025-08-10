import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("u");
  if (!url || !/^https:\/\/.{3,}/.test(url)) {
    return NextResponse.json({ error: "Bad or missing URL" }, { status: 400 });
  }
  return NextResponse.redirect(url, { status: 302 });
}
