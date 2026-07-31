const pool = require("./db");

exports.handler = async function () {
  const result = await pool.query("SELECT * FROM messages");

  return {
    statusCode: 200,
    body: JSON.stringify(result.rows),
  };
};
