import pool from "../shared/db.js";

export async function handler(event) {
  const { message_id } = JSON.parse(event.body || "{}");

  const result = await pool.query(
    `INSERT INTO message_reports (message_id)
   VALUES ($1)
   RETURNING *`,
    [message_id],
  );

  return {
    statusCode: 201,
    body: JSON.stringify(result.rows[0]),
  };
}
