module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
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
  });
  return User;
};
