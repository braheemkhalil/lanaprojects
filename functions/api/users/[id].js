import { getSessionUser } from "../../_lib/auth.js";

// DELETE /api/users/:id — remove an account
export async function onRequestDelete(context) {
  const { request, env, params } = context;
  const session = await getSessionUser(request, env);
  if (!session) return new Response(JSON.stringify({ error: "غير مصرح" }), { status: 401 });

  const id = Number(params.id);
  if (!id) return new Response(JSON.stringify({ error: "رقم غير صالح" }), { status: 400 });

  if (id === session.uid) {
    return new Response(JSON.stringify({ error: "لا يمكنك حذف حسابك الخاص وأنت مسجل دخول فيه" }), { status: 400 });
  }

  const { results } = await env.DB.prepare("SELECT COUNT(*) as count FROM users").all();
  if (results[0].count <= 1) {
    return new Response(JSON.stringify({ error: "لا يمكن حذف آخر حساب متبقي" }), { status: 400 });
  }

  await env.DB.prepare("DELETE FROM users WHERE id = ?").bind(id).run();

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
