const express = require("express");
const { Pool } = require("pg");
const morgan = require("morgan");

const client = require("prom-client");
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const app = express();


// Logging middleware
app.use(morgan("combined")); 

// PostgreSQL connection pool
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Test database connection
app.get("/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ time: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
