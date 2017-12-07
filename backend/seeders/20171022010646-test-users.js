'use strict';

let users = [
  {
    username: 'johndoe',
    email: 'johndoe@example.com',
    password: 'test123'
  },
  {
    username: 'mrfrosty',
    email: 'mrfrosty@icecream.com',
    password: 'test123'
  },
  {
    username: 'bobbito',
    email: 'bobbito@armstrong.com',
    password: 'hello123'
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',
      users.map((user, index) => { return {
        id: index,
        username: user.username,
        email: user.email,
        password: user.password,
        createdAt: new Date(),
        updatedAt: new Date()
      }}));
  },

  down: (queryInterface, Sequelize) => {
    let Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      [Op.or] : users.map(user => { return {username: user.username} })
    });
  }
};
