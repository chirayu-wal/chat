import { getUser } from "@/queries/user";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const encodedRedirectTo = requestUrl.searchParams.get("redirect") || "/app";
  const redirectTo = decodeURIComponent(encodedRedirectTo);

  const supabase = await createClient();

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
    const userData = await getUser();
    if (userData) {
      return NextResponse.redirect(`${requestUrl.origin}${redirectTo}`);
    }
  }
  return NextResponse.redirect(`${requestUrl.origin}${redirectTo}`);
}