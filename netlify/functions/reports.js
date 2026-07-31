import pool from "./db.js";

export async function handler() {
  const result = await pool.query("SELECT * FROM message_reports");

  return {
    statusCode: 200,
    body: JSON.stringify(result.rows),
  };
}
