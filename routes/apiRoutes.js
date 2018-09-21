var db = require("../models");

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
};

app.post("api/users", function (req, res) {
  db.User.create(req.body)
    .then(function (dbUser) {
      res.json(dbUser);
    });
});
// stripe payment API test - example request
// stripe.charges.retrieve("ch_1DCWlH2eZvKYlo2CXLJZ7CMk", {
//   api_key: "sk_test_4eC39HqLyjWDarjtT1zdp7dc"
// });
