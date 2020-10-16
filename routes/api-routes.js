var express = require("express");
const db = require("../models/");
const app = express();
const models = require("../models/");
const axios = require("axios");
const { sequelize } = require("../models/");

//API ROUTES

module.exports = (app) => {
  app.get("/", (req, res) => {
    db.Country.findAll()
      .then((data) => {
        res.render("index", { countries: data });
      })
      .catch((err) => console.log(err));
  });

  app.get("/country/:name", (req, res) => {
    db.Country.findOne({
      where: { name: req.params.name },
    })
      .then(function ({ id }) {
        db.Post.findAll({
          include: db.User,
          where: { CountryId: id },
        })
          .then((postData) => {
            let capital = "";
            let currency = "";
            let currencySymbol = "";
            let flag = "";
            let language = "";
            let population = "";
            let country = req.params.name;
            let countryData = {};
            axios
              .get("https://restcountries.eu/rest/v2/name/" + country)
              .then(function (response) {
                let data = response.data[0];
                capital = data.capital;
                currency = data.currencies[0].name;
                currencySymbol = data.currencies[0].symbol;
                flag = data.flag;
                language = data.languages[0].name;
                population = data.population;
                countryData = {
                  countryName: country,
                  flag: flag,
                  capital: capital,
                  language: language,
                  currency: currency,
                  currencySymbol: currencySymbol,
                  population: population,
                };
                res.render("country", { countryData, post: postData });
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  app.get("/manage", (req, res) => {
    console.log(req.body);
    db.User.findAll().then((data) => {
      res
        .render("manage", {
          users: data,
        })
        .catch((err) => console.log(err));
    });
  });

  app.get("/post", (req, res) => {
    db.User.findAll().then((users) => {
      db.Country.findAll()
        .then((countries) => {
          res
            .render("post", {
              countryList: countries,
              userNames: users,
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    });
  });

  app.get("/manage/user/:id", (req, res) => {
    db.User.findAll().then((users) => {
      db.Post.findAll({
        include: [db.User, db.Country],
        where: {
          UserId: req.params.id,
        },
      })
        .then((data) => {
          res
            .render("manage", {
              users: users,
              post: data,
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    });
  });

  app.get("/update/:id", (req, res) => {
    db.Post.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.User, db.Country],
    }).then((post) => {
      res.render("update", {
        post: post,
      });
    });
  });

  app.put("/update/:id", (req, res) => {
    console.log(req.body);
    db.Post.update(
      {
        title: req.body.title,
        body: req.body.body,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((results) => res.json(results));
  });

  app.post("/api/create-user", (req, res) => {
    db.User.create({
      full_name: req.body.full_name,
      numOfPosts: 0,
    })
      .then((results) => {
        res.json(results);
      })
      .catch((err) => console.log(err));
  });

  app.post("/api/newpost", (req, res) => {
    console.log("Hit this route");
    console.log(req.body);
    db.User.findByPk(parseInt(req.body.UserId))
      .then((user) => {
        console.log(user);
        user
          .increment(
            { numOfPosts: 1 },
            { where: { id: parseInt(req.body.UserId) } }
          )
          .then(() => {
            db.Post.create({
              title: req.body.title,
              body: req.body.body,
              category: req.body.category,
              CountryId: req.body.CountryId,
              UserId: user.id,
            })
              .then((results) => {
                res.json(results);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  app.delete("/api/post/:id", (req, res) => {
    db.Post.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((post) => {
        console.log(post);
        db.User.decrement("numOfPosts", { by: 1, where: { id: post.UserId } })
          .then(() => {
            db.Post.destroy({
              where: {
                id: req.params.id,
              },
            })
              .then(function (dbPost) {
                res.json(dbPost);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
};
