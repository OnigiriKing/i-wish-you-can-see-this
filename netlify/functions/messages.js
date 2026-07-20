const pool = require("./db");

const result = await pool.query("select * from messages");

