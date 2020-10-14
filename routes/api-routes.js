var express = require("express");
const db = require("../models/");
const app = express();
const models = require("../models/");
const axios = require("axios");

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
      res.render("index", { countries: data });
    });
  });

  app.get("/country/:name", (req, res) => {
    db.Country.findOne({
      where: { name: req.params.name },
    }).then(function ({ id }) {
      db.Post.findAll({
        where: { CountryId: id },
      }).then((postData) => {
        let capital = "";
        let currency = "";
        let currencySymbol = "";
        let flag = "";
        let language = "";
        let languageNative = "";
        let nameNative = "";
        let population = "";
        let domain = "";
        let country = req.params.name;
        let countryData = {};
        axios
          .get("https://restcountries.eu/rest/v2/name/" + country)
          .then(function (response) {
            // console.log(response.data)
            let data = response.data[0];
            capital = data.capital;
            currency = data.currencies[0].name;
            currencySymbol = data.currencies[0].symbol;
            flag = data.flag;
            language = data.languages[0].name;
            languageNative = data.languages[0].nativeName;
            nameNative = data.nativeName;
            population = data.population;
            domain = data.topLevelDomain[0];
            // console.log(response)
            // console.log(capital)
            // console.log(currency)
            // console.log(currencySymbol)
            // console.log(flag)
            // console.log(language)
            // console.log(languageNative)
            // console.log(nameNative)
            // console.log(population)
            // console.log(domain)
            countryData = {
              countryName: country,
              flag: flag,
              capital: capital,
              language: language,
              currency: currency,
              currencySymbol: currencySymbol,
              population: population,
            };
            // console.log(countryData);
            res.render("country", { countryData, post: postData });
          });
      });
    });
  });

  app.get("/manage", (req, res) => {
    res.render("manage");
  });

  app.get("/post", (req, res) => {
    db.User.findAll().then((data) => {
      res.render("post", {
        countryList: countryList,
        userNames: data,
      });
    });
  });
};
