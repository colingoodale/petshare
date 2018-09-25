var path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("../public/index.html");
  });
  app.get("/checkout", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/checkout.html"));
  });
  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/sign-up", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/sign-up.html"));
  });

  app.get("/service", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/service.html"));
  });

  app.get("/404", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });
  app.get("/petsignup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pets.html"))
<<<<<<< Updated upstream
  })
  app.get("/subs", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/services.html"))
  })
=======
  });
  app.post("/thanks", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/TYpage.html"));
  });
>>>>>>> Stashed changes
};
