import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = formData.get("password");

  const expectedPassword = process.env.CV_ACCESS_PASSWORD;
  const cookieName = process.env.CV_ACCESS_COOKIE || "cv_access_granted";

  if (!expectedPassword) {
    return NextResponse.json(
      { error: "Server is missing CV access configuration." },
      { status: 500 }
    );
  }

  if (typeof password !== "string" || password !== expectedPassword) {
    return NextResponse.redirect(new URL("/cv?error=invalid-password", request.url));
  }

  const response = NextResponse.redirect(new URL("/cv/full", request.url));

  response.cookies.set({
    name: cookieName,
    value: "true",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}