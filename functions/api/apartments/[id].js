import { getSessionUser } from "../../_lib/auth.js";

// PATCH /api/apartments/:id — update apartment details (does not touch payment history)
export async function onRequestPatch(context) {
  const { request, env, params } = context;
  const user = await getSessionUser(request, env);
  if (!user) return new Response(JSON.stringify({ error: "غير مصرح" }), { status: 401 });

  const id = Number(params.id);
  if (!id) return new Response(JSON.stringify({ error: "رقم غير صالح" }), { status: 400 });

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "طلب غير صالح" }), { status: 400 });
  }

  const { name, person_name, phone, type, rent_amount, total_price, installment_amount, start_date } = body;

  if (!name || !person_name || !type || !start_date) {
    return new Response(JSON.stringify({ error: "الرجاء تعبئة الحقول المطلوبة" }), { status: 400 });
  }
  if (type !== "rent" && type !== "sale") {
    return new Response(JSON.stringify({ error: "نوع العقد غير صحيح" }), { status: 400 });
  }

  const existing = await env.DB.prepare("SELECT id FROM apartments WHERE id = ?").bind(id).first();
  if (!existing) return new Response(JSON.stringify({ error: "الشقة غير موجودة" }), { status: 404 });

  await env.DB.prepare(`
    UPDATE apartments
    SET name = ?, person_name = ?, phone = ?, type = ?, rent_amount = ?, total_price = ?, installment_amount = ?, start_date = ?
    WHERE id = ?
  `).bind(
    name.trim(),
    person_name.trim(),
    phone ? phone.trim() : null,
    type,
    type === "rent" ? Number(rent_amount) || 0 : null,
    type === "sale" ? Number(total_price) || 0 : null,
    type === "sale" ? Number(installment_amount) || 0 : null,
    start_date,
    id
  ).run();

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

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
