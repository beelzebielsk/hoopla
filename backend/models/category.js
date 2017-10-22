'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Category.belongsToMany(Post, {
          through: 'categorizedAs',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return Category;
};
