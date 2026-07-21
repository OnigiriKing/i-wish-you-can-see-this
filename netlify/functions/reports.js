const pool = require("./db");

const result = await pool.query("select * from message_reports");
