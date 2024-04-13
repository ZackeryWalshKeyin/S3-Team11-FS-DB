const express = require("express");
const router = express.Router();
const logins = require("../controllers/pgLoginsDAL.js");

router.get("/", (req, res) => {
  res.render("signup", { errorMessage: null });
});

router.post("/", async (req, res) => {
  // Check if username or email already exists
  const existingUser = await logins.getLoginByUsername(req.body.username);
  const existingEmail = await logins.getLoginByEmail(req.body.email);

  if (existingUser) {
    // Username already exists
    return res.render("signup", { errorMessage: "Username already exists" });
  }

  if (existingEmail) {
    // Email already exists
    return res.render("signup", { errorMessage: "Email already exists" });
  }

  try {
    let result = await logins.addLogin(
      req.body.firstName,
      req.body.lastName,
      req.body.username,
      req.body.email,
      req.body.password
    );
    res.redirect("/login");
  } catch (error) {
    console.log(error);
    res.render("signup", {
      errorMessage: "Error occurred while signing up. Please try again later.",
    });
  }
});

module.exports = router;
