const express = require("express");
const methodOverride = require("method-override");
const dataAccessLayer = require("./dataAccessLayer");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.json());

// Routes
const apiRoutes = require("./routes/apiRoutes");
const webRoutes = require("./routes/webRoutes");
app.use("/home", homeRoutes);
app.use("/login", loginRoutes);
app.use("/signup", signupRoutes);
app.use("/search", searchRoutes);

// Start server
const PORT = 3010;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
