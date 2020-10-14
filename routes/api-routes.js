var express = require("express");
const db = require("../models/");
const app = express();
const models = require("../models/");

const countryList = [
  "Albania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kazakhstan",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "Vatican City",
];

//API ROUTES

module.exports = (app) => {
  app.get("/", (req, res) => {
    db.Country.findAll().then((data) => {
      // console.log(data);
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
    db.User.findAll().then((data) =>{
      res.render("post", {
        countryList: countryList,
        userNames: data
      })
    })
    // res.render("post");
  });
};
