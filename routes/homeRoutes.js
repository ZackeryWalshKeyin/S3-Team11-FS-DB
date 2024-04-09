const express = require("express");
const router = express.Router();
const dataAccessLayer = require("../controllers/DAL.js");

router.get("/", async (req, res) => {
  res.render("home");
});

module.exports = router;
