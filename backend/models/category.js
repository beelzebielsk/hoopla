'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING
  });
  Category.associate = function(models) {
    Category.belongsToMany(models.Post, {
      through: 'categorizedAs',
      onDelete: 'CASCADE',
    });
  }
  return Category;
};
