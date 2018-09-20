module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return User;
};
