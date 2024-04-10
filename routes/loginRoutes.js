const express = require("express");
const router = express.Router();
const dataAccessLayer = require("../controllers/DAL.js");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", (req, res) => {
  const { username, password } = req.body;

  // NEED TO CHECK USERNAME AND PASSWORD AGAINST DATABASE HERE - FOR NOW HARDCODED - TO BE COMPLETED
  if (username === "admin" && password === "password") {
    res.send("Login successful");
  } else {
    res.send("Invalid username or password");
  }
});

module.exports = router;
