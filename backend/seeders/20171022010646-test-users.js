'use strict';

let users = [
  'johndoe@example.com',
  'mrfrosty@icecream.com',
  'bobbito@armstrong.com',
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      users.map((email, index) => { return {
        id: index,
        email: email,
        createdAt: new Date(),
        updatedAt: new Date()
      }}));
  },

  down: (queryInterface, Sequelize) => {
    let Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      [Op.or] : users.map(email => { return {email} })
    });
  }
};
