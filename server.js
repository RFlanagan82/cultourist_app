// *** DEPENDENCIES =============================
const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");

//SET UP HANDLEBARS PROTOTYPE ACCESS ============
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const db = require("./models");

//SET UP OUR EXPRESS APP=========================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handlebars Middleware==========================
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
    //CREATED CUSTOM HELPER FOR HANDLEBARS CONDITIONAL FUNCTIONALITY
    helpers: {
      compare: function (v1, operator, v2, options) {
        'use strict';
        var operators = {
          '==': v1 == v2 ? true : false,
          '===': v1 === v2 ? true : false,
          '!=': v1 != v2 ? true : false,
          '!==': v1 !== v2 ? true : false,
          '>': v1 > v2 ? true : false,
          '>=': v1 >= v2 ? true : false,
          '<': v1 < v2 ? true : false,
          '<=': v1 <= v2 ? true : false,
          '||': v1 || v2 ? true : false,
          '&&': v1 && v2 ? true : false
        }
        if (operators.hasOwnProperty(operator)) {
          if (operators[operator]) {
            return options.fn(this);
          }
          return options.inverse(this);
        }
        return console.error('Error: Expression "' + operator + '" not found');
      }
    }
    
  })
);
app.set("view engine", "handlebars");

// STATIC DIRECTORY MIDDLEWARE
app.use(express.static("public"));

// ROUTES TESTING
//=============================================================
//HTML Routes
// app.get("/", (req, res) => {
//     res.render("index");
//   });

// API ROUTES
// app.get("/api/config", (req, res) => {
//     res.json({
//       success: true,
//     });
// });
//=============================================================

//ROUTE
var routes = require("./routes/api-routes")(app);

//Event Listener on PORT - SYNCING OUR SEQUELIZE MODELS AND STARTING EXPRESS APP
db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
