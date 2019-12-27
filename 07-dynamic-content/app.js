// Server with express
const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");
const app = express();

// Setting global config; view engine to set templating engine
app.set("view engine", "pug"); // looks for .pug files
app.set("views", "07-dynamic-content/views"); // second param sets directory from root directory

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Handle middlewares
app.use("/admin", adminData.routes);
app.use(shopRoutes);

// Handle 404
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  // Using templating engine
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
