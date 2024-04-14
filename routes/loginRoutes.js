const express = require("express");
const router = express.Router();
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const logins = require("../controllers/pgLoginsDAL.js");

// Initialize Passport
router.use(passport.initialize());
router.use(passport.session());

// Passport Local authentication setup
passport.use(
  new localStrategy(
    { usernameField: "username" },
    async (username, password, done) => {
      let user = await logins.getLoginByUsername(username);
      if (!user) {
        return done(null, false, { message: "No user with that username." });
      }
      user.username = username;
      try {
        if (password === user.password) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect password." });
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

router.get("/", (req, res) => {
  res.render("login", { message: req.query.message });
});
router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/home", // Redirect to the home page if authentication is successful
    failureRedirect: "/login?message=Invalid%20username%20or%20password",
  })
);

module.exports = router;
