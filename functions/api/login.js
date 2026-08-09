import { verifyPassword, createSession } from "../_lib/auth.js";

export async function onRequestPost(context) {
  const { request, env } = context;
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "طلب غير صالح" }), { status: 400 });
  }

  const { username, password } = body;
  if (!username || !password) {
    return new Response(JSON.stringify({ error: "الرجاء إدخال اسم المستخدم وكلمة المرور" }), { status: 400 });
  }

  const user = await env.DB
    .prepare("SELECT id, username, display_name, password_hash FROM users WHERE username = ?")
    .bind(username.trim().toLowerCase())
    .first();

  if (!user) {
    return new Response(JSON.stringify({ error: "بيانات الدخول غير صحيحة" }), { status: 401 });
  }

  const ok = await verifyPassword(password, user.password_hash);
  if (!ok) {
    return new Response(JSON.stringify({ error: "بيانات الدخول غير صحيحة" }), { status: 401 });
  }

  const { cookie, payload } = await createSession(env, user);

  return new Response(JSON.stringify({ ok: true, user: { username: payload.username, name: payload.name } }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": cookie,
    },
  });
}
