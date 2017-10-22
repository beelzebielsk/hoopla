'use strict';

let relations = [
  {postId:0 , categoryId:0},
  {postId:0 , categoryId:1},
  {postId:1 , categoryId:0},
  {postId:1 , categoryId:1},
  {postId:2 , categoryId:2},
  {postId:3 , categoryId:3},
  {postId:4 , categoryId:3},
  {postId:6 , categoryId:2},
  {postId:13 , categoryId:2},
  {postId:14 , categoryId:2},
  {postId:15 , categoryId:0},
  {postId:19 , categoryId:3},
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categorizedAs', relations);
  },

  down: (queryInterface, Sequelize) => {
    let Op = Sequelize.Op;
    return queryInterface.bulkDelete('categorizedAs', {
      [Op.or] : relations
    });
  }
};
