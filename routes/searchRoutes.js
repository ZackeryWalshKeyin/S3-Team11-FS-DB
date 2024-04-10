const express = require("express");
const router = express.Router();
const dataAccessLayer = require("../controllers/DAL.js");

router.get("/", (req, res) => {
  res.render("search");
});

router.get("/search", (req, res) => {
  const { searchParam, database } = req.query;

  // Here you would typically perform the search in the selected database
  // For simplicity, we'll just return a hard-coded array of results
  const results = ["Result 1", "Result 2", "Result 3"];

  res.render("searchResults", { results });
});

module.exports = router;
