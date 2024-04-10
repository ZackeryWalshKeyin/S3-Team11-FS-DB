const express = require("express");
const router = express.Router();
const dataAccessLayer = require("../controllers/DAL.js");

router.get("/", (req, res) => {
  res.render("signup");
});

// NEED TO ADD VALIDATION FOR EXISTING USERNAME AND ADD USER TO DATABASE
// router.post("/", (req, res) => {
//   const { username, password } = req.body;
//   dataAccessLayer.addUser(username, password);
//   res.send("User added");
// });

module.exports = router;
