import { getSessionUser } from "../../_lib/auth.js";

// DELETE /api/apartments/:id — remove an apartment and all its payments
export async function onRequestDelete(context) {
  const { request, env, params } = context;
  const user = await getSessionUser(request, env);
  if (!user) return new Response(JSON.stringify({ error: "غير مصرح" }), { status: 401 });

  const id = Number(params.id);
  if (!id) return new Response(JSON.stringify({ error: "رقم غير صالح" }), { status: 400 });

  await env.DB.prepare("DELETE FROM apartments WHERE id = ?").bind(id).run();

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
