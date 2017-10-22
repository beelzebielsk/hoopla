'use strict';

let comments = [
  {
    id: 0,
    content: "What a terrible idea.",
    replyToId: null,
    postId: 0,
    userId: 0
  },
  {
    id: 1,
    content: "Get out of here.",
    replyToId: null,
    postId: 0,
    userId: 1
  },
  {
    id: 2,
    content: "I kinda like it, but this needs clarification.",
    replyToId: null,
    postId: 0,
    userId: 2
  },
  {
    id: 3,
    content: "You should leave, too",
    replyToId: 2,
    postId: 0,
    userId: 0
  },
  {
    id: 4,
    content: "Quite ambitious if I do say so myself.",
    replyToId: null,
    postId: 1,
    userId: 0
  },
];

comments.forEach(comment => {
  comment.createdAt = new Date();
  comment.updatedAt = new Date();
});


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', comments);
  },

  down: (queryInterface, Sequelize) => {
    let Op = Sequelize.Op;
    return queryInterface.bulkDelete('Comments', {
      [Op.or] : comments.map(comment => { return {id:comment.id}; })
    });
  }
};
