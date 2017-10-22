'use strict';

let categories = [
  {
    name: "Edible"
  },
  {
    name: "Wearable"
  },
  {
    name: "Reasonable"
  },
  {
    name: "Aww"
  },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Categories',
      categories.map((cat, index) => { return {
        id: index,
        name: cat.name,
        createdAt: new Date(),
        updatedAt: new Date()
      }}))
  },

  down: (queryInterface, Sequelize) => {
    let Op = Sequelize.Op;
    return queryInterface.bulkDelete('Categories', {
      [Op.or] : categories.map(cat => { return {name:cat.name} })
    })
  }
};
