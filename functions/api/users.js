import { getSessionUser, hashPassword } from "../_lib/auth.js";

// GET /api/users — list all accounts (no password data returned)
export async function onRequestGet(context) {
  const { request, env } = context;
  const session = await getSessionUser(request, env);
  if (!session) return new Response(JSON.stringify({ error: "غير مصرح" }), { status: 401 });

  const { results } = await env.DB
    .prepare("SELECT id, username, display_name, created_at FROM users ORDER BY created_at ASC")
    .all();

  return new Response(JSON.stringify({ users: results }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// POST /api/users — create a new account
export async function onRequestPost(context) {
  const { request, env } = context;
  const session = await getSessionUser(request, env);
  if (!session) return new Response(JSON.stringify({ error: "غير مصرح" }), { status: 401 });

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "طلب غير صالح" }), { status: 400 });
  }

  const { username, display_name, password } = body;
  if (!username || !display_name || !password) {
    return new Response(JSON.stringify({ error: "الرجاء تعبئة جميع الحقول" }), { status: 400 });
  }
  if (password.length < 6) {
    return new Response(JSON.stringify({ error: "كلمة المرور قصيرة جداً (٦ أحرف على الأقل)" }), { status: 400 });
  }

  const cleanUsername = username.trim().toLowerCase().replace(/\s+/g, "");
  const existing = await env.DB.prepare("SELECT id FROM users WHERE username = ?").bind(cleanUsername).first();
  if (existing) {
    return new Response(JSON.stringify({ error: "اسم المستخدم هذا مستخدم من قبل" }), { status: 409 });
  }

  const password_hash = await hashPassword(password);
  const result = await env.DB
    .prepare("INSERT INTO users (username, display_name, password_hash) VALUES (?, ?, ?)")
    .bind(cleanUsername, display_name.trim(), password_hash)
    .run();

  return new Response(JSON.stringify({ ok: true, id: result.meta.last_row_id }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
