const express = require("express");
const router = express.Router();
const dataAccessLayer = require("../controllers/pgDAL.js");

router.get("/", async (req, res) => {
  res.render("home");
});

module.exports = router;
