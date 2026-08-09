import { getSessionUser } from "../_lib/auth.js";

// GET /api/payments?apartment_id=5  (apartment_id optional — omit to get everything)
export async function onRequestGet(context) {
  const { request, env } = context;
  const user = await getSessionUser(request, env);
  if (!user) return new Response(JSON.stringify({ error: "غير مصرح" }), { status: 401 });

  const url = new URL(request.url);
  const apartmentId = url.searchParams.get("apartment_id");

  let query = `
    SELECT p.*, u.display_name AS recorded_by_name
    FROM payments p
    LEFT JOIN users u ON u.id = p.recorded_by
  `;
  let stmt;
  if (apartmentId) {
    query += " WHERE p.apartment_id = ? ORDER BY p.payment_date DESC";
    stmt = env.DB.prepare(query).bind(Number(apartmentId));
  } else {
    query += " ORDER BY p.payment_date DESC";
    stmt = env.DB.prepare(query);
  }

  const { results } = await stmt.all();

  return new Response(JSON.stringify({ payments: results }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// POST /api/payments — log a payment
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

  const { apartment_id, amount, payment_date, note } = body;

  if (!apartment_id || !amount || Number(amount) <= 0 || !payment_date) {
    return new Response(JSON.stringify({ error: "الرجاء إدخال بيانات صحيحة" }), { status: 400 });
  }

  const apt = await env.DB.prepare("SELECT id FROM apartments WHERE id = ?").bind(Number(apartment_id)).first();
  if (!apt) return new Response(JSON.stringify({ error: "الشقة غير موجودة" }), { status: 404 });

  const result = await env.DB.prepare(`
    INSERT INTO payments (apartment_id, amount, payment_date, note, recorded_by)
    VALUES (?, ?, ?, ?, ?)
  `).bind(
    Number(apartment_id),
    Number(amount),
    payment_date,
    note ? note.trim() : null,
    user.uid
  ).run();

  return new Response(JSON.stringify({ ok: true, id: result.meta.last_row_id }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
