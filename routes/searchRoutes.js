const express = require("express");
const router = express.Router();
const { pool } = require("../controllers/pgDAL.js");

// How can i implement the const POOL from DAL.js in this file?

router.get("/", (req, res) => {
  res.render("search");
});

router.get("/search", async (req, res) => {
  const { searchParam, database } = req.query;

  if (database === "postgres") {
    try {
      const query = `
          SELECT * FROM stock_market_data
          WHERE stock_symbol ILIKE $1
          OR stock_name ILIKE $1
          OR stock_sector ILIKE $1
        `;
      const values = [`%${searchParam}%`];

      const { rows } = await pool.query(query, values);
      res.render("searchResults", { results: rows });
    } catch (err) {
      console.error(err);
      res.send("An error occurred");
    }
  } else {
    // Handle MongoDB search
  }
});

module.exports = router;
