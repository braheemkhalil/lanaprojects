import { getSessionUser } from "../_lib/auth.js";

export async function onRequestGet(context) {
  const { request, env } = context;
  const user = await getSessionUser(request, env);
  if (!user) {
    return new Response(JSON.stringify({ authenticated: false }), { status: 200 });
  }
  return new Response(
    JSON.stringify({ authenticated: true, username: user.username, name: user.name }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
