var path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("../index.html");
  });

  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../login.html"));
  });

  app.get("/sign-up", function (req, res) {
    res.sendFile(path.join(__dirname, "../sign-up.html"));
  });

  app.get("/service", function (req, res) {
    res.sendFile(path.join(__dirname, "../service"));
  });

  app.get("/404", function (req, res) {
    res.sendFile(path.join(__dirname, "../404"));
  });
  app.get("/petsignup", function (req, res) {
    res.sendFile(path.join(__dirname, "../pets"))
  })
  app.get("/subs", function (req, res) {
    res.sendFile(path.join(__dirname, "../services"))
  })
  app.get("/thankyou", function (req, res) {
    res.sendFile(path.join(__dirname, "../TYpage"))
  })
};
