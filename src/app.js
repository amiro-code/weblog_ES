const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const postRoutes = require("./routes/postRoutes");

const app = express();

// ⭐️ IMPORTANT FOR RENDER
const PORT = process.env.PORT || 3000;

// 1) Body parser (for form data)
app.use(express.urlencoded({ extended: true }));

// 2) Method override (for PUT & DELETE via forms)
app.use(methodOverride("_method"));

// 3) Static files (css, etc.)
app.use(express.static(path.join(__dirname, "public")));

// 4) View engine setup (EJS)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 5) Routes
app.use("/", postRoutes);

// 6) Run server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
