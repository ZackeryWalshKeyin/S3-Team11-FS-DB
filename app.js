const express = require("express");
const app = express();
const methodOverride = require("method-override");
const dataAccessLayer = require("./controllers/pgDAL.js");
const passport = require("passport");
const session = require("express-session");
const logins = require("./controllers/pgLoginsDAL.js");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(
  session({
    secret: "abc",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json());
app.use(express.static("public/stylesheets")); // for css files

// Passport authentication setup

passport.serializeUser((user, done) => {
  done(null, user._id);
});
passport.deserializeUser(async (id, done) => {
  let user = await logins.getLoginById(id);
  done(null, user);
});

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
const homeRoutes = require("./routes/homeRoutes");
const loginRoutes = require("./routes/loginRoutes");
const signupRoutes = require("./routes/signupRoutes");
const searchRoutes = require("./routes/searchRoutes");

app.use("/home", homeRoutes);
app.use("/login", checkNotAuthenticated, loginRoutes);
app.use("/signup", checkNotAuthenticated, signupRoutes);
app.use("/search", checkAuthenticated, searchRoutes);

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect(
    "/login?message=You%20must%20be%20logged%20in%20to%20access%20the%20search%20page"
  );
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/home");
  }
  return next();
}

// Start server
const PORT = 3010;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
