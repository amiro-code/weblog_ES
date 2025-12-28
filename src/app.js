const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const postRoutes = require("./routes/postRoutes");

const app = express();
const PORT = 3000;

// 1) body parser برای فرم‌ها
app.use(express.urlencoded({ extended: true }));

// 2) method override برای PUT و DELETE از طریق فرم
app.use(methodOverride("_method"));

// 3) فایل‌های استاتیک (css و ...)
app.use(express.static(path.join(__dirname, "public")));

// 4) تنظیمات EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 5) Routes
app.use("/", postRoutes);

// 6) Run server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
