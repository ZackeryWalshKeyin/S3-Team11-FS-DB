const express = require("express");
const app = express();
const methodOverride = require("method-override");
const dataAccessLayer = require("./controllers/DAL.js");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public/stylesheets")); // for css files

// Routes
const homeRoutes = require("./routes/homeRoutes");
const loginRoutes = require("./routes/loginRoutes");
const signupRoutes = require("./routes/signupRoutes");
const searchRoutes = require("./routes/searchRoutes");

app.use("/home", homeRoutes);
app.use("/login", loginRoutes);
app.use("/signup", signupRoutes);
app.use("/search", searchRoutes);

app.get("/search", (req, res) => {
  const { searchParam, database } = req.query;

  const results = ["result1", "result2", "result3"];
  res.render("searchResults", { results });
});

// Start server
const PORT = 3010;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
