'use strict';

let posts = [
  {
    title: "Candy clothing",
    userId: null, // Because this was a dumb idea.
  },
  {
    title: "Candy Cane (or walker, or wheelchair if ambitious)",
    userId: 0,
  },
  {
    title: "Looking for CTP project",
    userId: null, // Have you no shame? This user is now gone.
  },
  {
    title: "A real Pinocchio!",
    userId: 0,
  },
  {
    title: "Friends",
    userId: 0,
  },
  {
    title: "World Peace",
    userId: 0,
  },
  {
    title: "Bike Home (a bike with a foldout tent/umbrella)",
    userId: 0,
  },
  {
    title: "Wooden sculpture of macaroni picture",
    userId: 0,
  },
  {
    title: "Program: put in animal, get correct gestures for shadow puppet",
    userId: 0,
  },
  {
    title: "Baloon animal stampede",
    userId: 0,
  },
  {
    title: "Apartment swimming pool",
    userId: 0,
  },
  {
    title: "Dissolvable fake eyelashes",
    userId: 0,
  },
  {
    title: "Food coloring super soakers for a tye dye party",
    userId: 0,
  },
  {
    title: "Willy Wonka's chocolate factory, will pay shipping charges",
    userId: 0,
  },
  {
    title: "Life-sized baking soda volcano",
    userId: 1,
  },
  {
    title: "Cheddar cheese Egyptian pyramid with string cheese mummies on inside",
    userId: 0,
  },
  {
    title: "Rube-Goldberg teleporter",
    userId: 2,
  },
  {
    title: "Ball of Hamsters",
    userId: 2,
  },
  {
    title: "Tennis cube",
    userId: 0,
  },
  {
    title: "Halp",
    userId: 1,
  },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts',
      posts.map((post, index) => { return {
        id: index,
        title: post.title,
        userId: post.userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }}))
  },

  down: (queryInterface, Sequelize) => {
    let Op = Sequelize.Op;
    return queryInterface.bulkDelete('Posts', {
      [Op.or] : posts.map(post => { return {title: post.title}})
    })
  }
};
