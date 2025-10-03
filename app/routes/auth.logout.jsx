import { redirect } from "@remix-run/react";
import { supabaseClient } from "../utils/supabase.client";
import { destroySession, getSession } from "../utils/session.server";

export async function action({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("access_token");
  if (token) await supabaseClient.auth.signOut();
  return redirect("/", {
    headers: { "Set-Cookie": await destroySession(session) },
  });
}

export default function Logout() {
  return null;
}

