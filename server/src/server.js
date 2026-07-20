// server
const express = require("express");
// security
const cors = require("cors");
// access to .env
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})