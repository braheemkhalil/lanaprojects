import { getSessionUser, verifyPassword, hashPassword, createSession } from "../_lib/auth.js";

// PATCH /api/account — update display name and/or password
export async function onRequestPatch(context) {
  const { request, env } = context;
  const session = await getSessionUser(request, env);
  if (!session) return new Response(JSON.stringify({ error: "غير مصرح" }), { status: 401 });

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "طلب غير صالح" }), { status: 400 });
  }

  const { current_password, new_password, display_name } = body;

  const user = await env.DB
    .prepare("SELECT id, username, display_name, password_hash FROM users WHERE id = ?")
    .bind(session.uid)
    .first();
  if (!user) return new Response(JSON.stringify({ error: "المستخدم غير موجود" }), { status: 404 });

  // Changing password requires the current password
  if (new_password) {
    if (!current_password) {
      return new Response(JSON.stringify({ error: "الرجاء إدخال كلمة المرور الحالية" }), { status: 400 });
    }
    const ok = await verifyPassword(current_password, user.password_hash);
    if (!ok) {
      return new Response(JSON.stringify({ error: "كلمة المرور الحالية غير صحيحة" }), { status: 401 });
    }
    if (new_password.length < 6) {
      return new Response(JSON.stringify({ error: "كلمة المرور الجديدة قصيرة جداً (٦ أحرف على الأقل)" }), { status: 400 });
    }
    const newHash = await hashPassword(new_password);
    await env.DB.prepare("UPDATE users SET password_hash = ? WHERE id = ?").bind(newHash, user.id).run();
  }

  if (display_name && display_name.trim()) {
    await env.DB.prepare("UPDATE users SET display_name = ? WHERE id = ?").bind(display_name.trim(), user.id).run();
  }

  const updated = await env.DB
    .prepare("SELECT id, username, display_name FROM users WHERE id = ?")
    .bind(user.id)
    .first();

  // Re-issue the session cookie so the new display name reflects immediately
  const { cookie } = await createSession(env, updated);

  return new Response(JSON.stringify({ ok: true, name: updated.display_name }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Set-Cookie": cookie },
  });
}
