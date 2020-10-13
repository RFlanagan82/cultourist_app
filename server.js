const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const db = require("./models");

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handlebars Middleware
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// Routes Test
//=============================================================

//HTML Routes
app.get("/", (req, res) => {
    res.render("index");
  });

// API ROUTES
// app.get("/api/config", (req, res) => {
//     res.json({
//       success: true,
//     });
// });
//=============================================================

//ROUTES
//Plug in the require
var routes = require("./routes/api-routes")(app);

//Event Listener on PORT
db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
