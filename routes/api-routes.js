var express = require("express");
const db = require("../models/");
const app = express();
const models = require("../models/");

//API ROUTES

module.exports = (app) => {
  app.get("/", (req, res) => {
    db.Country.findAll().then((data) => {
      console.log(data);
      res.render("index", { countries: data });
    });
    // res.render("index");
  });

  app.get("/country", (req, res) => {
    res.render("country");
  });

  app.get("/manage", (req, res) => {
    res.render("manage");
  });

  app.get("/post", (req, res) => {
    res.render("post");
  });
};
