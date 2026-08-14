import { getSessionUser } from "../_lib/auth.js";

// GET /api/apartments — list all apartments with total paid so far
export async function onRequestGet(context) {
  const { request, env } = context;
  const user = await getSessionUser(request, env);
  if (!user) return new Response(JSON.stringify({ error: "غير مصرح" }), { status: 401 });

  const { results } = await env.DB.prepare(`
    SELECT a.*, COALESCE(SUM(p.amount), 0) AS total_paid
    FROM apartments a
    LEFT JOIN payments p ON p.apartment_id = a.id
    GROUP BY a.id
    ORDER BY a.created_at DESC
  `).all();

  return new Response(JSON.stringify({ apartments: results }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// POST /api/apartments — create a new apartment
export async function onRequestPost(context) {
  const { request, env } = context;
  const user = await getSessionUser(request, env);
  if (!user) return new Response(JSON.stringify({ error: "غير مصرح" }), { status: 401 });

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "طلب غير صالح" }), { status: 400 });
  }

  const { name, person_name, phone, type, rent_amount, total_price, installment_amount, start_date, block, floor_number, side } = body;

  if (!name || !person_name || !type || !start_date) {
    return new Response(JSON.stringify({ error: "الرجاء تعبئة الحقول المطلوبة" }), { status: 400 });
  }
  if (type !== "rent" && type !== "sale") {
    return new Response(JSON.stringify({ error: "نوع العقد غير صحيح" }), { status: 400 });
  }
  if (type === "rent" && !rent_amount) {
    return new Response(JSON.stringify({ error: "الرجاء إدخال قيمة الإيجار" }), { status: 400 });
  }
  if (type === "sale" && (!total_price || !installment_amount)) {
    return new Response(JSON.stringify({ error: "الرجاء إدخال السعر الإجمالي وقيمة القسط" }), { status: 400 });
  }

  const result = await env.DB.prepare(`
    INSERT INTO apartments (name, person_name, phone, type, rent_amount, total_price, installment_amount, start_date, created_by, block, floor_number, side)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    name.trim(),
    person_name.trim(),
    phone ? phone.trim() : null,
    type,
    type === "rent" ? Number(rent_amount) : null,
    type === "sale" ? Number(total_price) : null,
    type === "sale" ? Number(installment_amount) : null,
    start_date,
    user.uid,
    block || "1",
    (floor_number === "" || floor_number === undefined || floor_number === null) ? null : Number(floor_number),
    side || null
  ).run();

  return new Response(JSON.stringify({ ok: true, id: result.meta.last_row_id }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
