var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("login");
  });

  app.get("/sign-up", function (req, res) {
    res.render("user-info");
  });

  app.post("/sign-up", function (req, res) {
    db.User.create({
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      home_address_1: DataTypes.STRING,
      home_address_2: DataTypes.STRING,
      home_city: DataTypes.STRING,
      home_state: DataTypes.STRING,
      home_zipcode: DataTypes.STRING,
      credit_numb: DataTypes.STRING,
      pet_name: DataTypes.STRING
    }).then(function () {
      res.render("services");
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
