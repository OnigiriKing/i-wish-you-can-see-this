const pool = require("./db");

exports.handler = async function () {
  const result = await pool.query("SELECT * FROM message_reports");

  return {
    statusCode: 200,
    body: JSON.stringify(result.rows),
  };
};
