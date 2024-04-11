const express = require("express");
const router = express.Router();
const { poolPG } = require("../controllers/pgDAL.js");
const { poolMongo } = require("../controllers/mongoDAL.js");

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

      const { rows } = await poolPG.query(query, values);
      res.render("searchResults", { results: rows });
    } catch (err) {
      console.error(err);
      res.send("An error occurred");
    }
  } else {
    try {
      const collection = poolMongo
        .db("stock_market_database")
        .collection("stock_market_data");
      const query = {
        $or: [
          { stock_symbol: { $regex: searchParam, $options: "i" } },
          { stock_name: { $regex: searchParam, $options: "i" } },
          { stock_sector: { $regex: searchParam, $options: "i" } },
        ],
      };

      const results = await collection.find(query).toArray();
      res.render("searchResults", { results: results });
    } catch (err) {
      console.error(err);
      res.send("An error occurred");
    }
  }
});

module.exports = router;
