const db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/sign-up", function (req, res) {
    res.json("user-info");
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/sign-up", function (req, res) {
    db.User.create({
      user_email: req.body.user_email,
      user_password: req.body.user_password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      home_address_1: req.body.home_address_1,
      home_address_2: req.body.home_address_2,
      home_city: req.body.home_city,
      home_state: req.body.home_state,
      home_zipcode: req.body.home_zipcode,
      credit_numb: req.body.credit_numb,
    })
      .then(function () {
        res.json({ "msg": "Your user info is saved" });
      });
  });

  app.post("/api/petsignup", function (req, res) {
    console.log("hit route");
    console.log(req.body);
    db.Pets.create({
      pet_name: req.body.pet_name,
      pet_type: req.body.pet_type,
      pet_breed: req.body.pet_breed,
      pet_picture_url: req.body.pet_picture,
      service_animal: req.body.service,
      userId: 1
    })
      .then(function () {
        res.json({ "msg": "Your pet info is saved" })
      }).catch(function (err) {
        console.log(err);
      });
  });



};
