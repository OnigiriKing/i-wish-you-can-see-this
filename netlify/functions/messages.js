import pool from "../shared/db.js";

export async function handler() {
  try {
    if (event.httpMethod === "GET") {
      const result = await pool.query(
        "SELECT * FROM messages ORDER BY created_at DESC",
      );

      return {
        statusCode: 200,
        body: JSON.stringify(result.rows),
      };
    }
    if (event.httpMethod === "POST") {
      const { sender, receiver, message, latitude, longitude } = JSON.parse(
        event.body || "{}",
      );
      const result = await pool.query(
        `INSERT INTO messages
          (sender, receiver, message, latitude, longitude)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING *`,
        [sender, receiver, message, latitude, longitude],
      );

      return {
        statusCode: 201,
        body: JSON.stringify(result.rows[0]),
      };
    }
    return { statusCode: 405, body: "Method not allowed" };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: "Database operation failed" };
  }
}
