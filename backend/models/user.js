'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });
  User.associate = function(models) {
    User.hasMany(models.Comment);
    User.hasMany(models.Post);
  }
  return User;
};
