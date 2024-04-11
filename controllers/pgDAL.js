// Initialize the connection to the postgres database

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "stock_market_database",
  password: "password",
  port: 5432,
});

module.exports = { pool };