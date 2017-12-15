'use strict';

let submissions = [
    {
        title: "Best Candy Shirt. The best.",
        content: "I 3D printed a mold of a torso, then poured melted sugar into it. Wait, were you supposed to be able to wear this thing?",
        userId: 2,
        PostId: 0,
    },
    {
        title: "Candy Hoverboard",
        content: "I went above and beyond! This this will get you anywhere! Main materials are sugar and graphene. Main technical difficulty was figuring out how to synthesize graphene out of common household materials. Just takes some vinegar and baking soda, actually.",
        userId: 2,
        PostId: 1,
    },
    {
        title: "I'll be your friend",
        content: "I too, have need of a friend. I'd like to know companionship before I melt.",
        userId: 1,
        PostId: 4,
    },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Posts',
          submissions.map(submission => { return {
              title: submission.title,
              content: submission.content,
              userId: submission.userId,
              createdAt: new Date(),
              updatedAt: new Date(),
          }}));
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Posts', {
          $or : submissions.map(submission => { 
              return {title: submission.title} })
      });
  }
};
