'use strict';

let posts = [
  {
    title: "Candy clothing",
    content: "I want you to make me a t-shirt made out of candies! Why? Because I love candies! Please send me pictures of you wearing the shirt!",
    userId: null, // Because this was a dumb idea.
  },
  {
    title: "Candy Cane (or walker, or wheelchair if ambitious)",
    content: "As someone who had an injury from a sport I'm playing (ping-pong), I would like someone to make a cane, but here's the twist, It's going to be made out of... Candies!",
    userId: 0,
  },
  {
    title: "Looking for CTP project",
    content: "Maecenas ornare pulvinar justo, ac sollicitudin diam blandit vel. Integer mollis libero sed elit laoreet, vel egestas nisi semper. Morbi posuere at lectus in eleifend. Nulla vitae magna maximus, lobortis velit in, eleifend tortor. Nulla suscipit sem vitae dolor aliquet ultricies. Integer iaculis non elit ultrices venenatis. Sed rutrum ligula nec dolor posuere pellentesque. Nam eu erat eget libero porta gravida.",
    userId: null, // Have you no shame? This user is now gone.
  },
  {
    title: "A real Pinocchio!",
    content: "Phasellus sed odio ipsum. Sed tincidunt diam at dui rhoncus, et commodo lorem facilisis. Suspendisse faucibus commodo augue, dictum ultricies diam viverra eget. Donec placerat neque sem, sodales mattis mauris aliquet eu. Curabitur sit amet suscipit odio, eget commodo augue. Pellentesque ac porttitor elit. Etiam turpis felis, fermentum interdum dignissim a, pulvinar et ante. Cras porttitor venenatis ipsum, ut laoreet nisi pretium eu.",
    userId: 0,
  },
  {
    title: "Friends",
    content: "Hi, I want to be friends with someone. I want to watch Friends with you. Tanks",
    userId: 0,
  },
  {
    title: "World Peace",
    content: "Idk if this task is too much to ask but I think it's going to benefit everyone.",
    userId: 0,
  },
  {
    title: "Bike Home (a bike with a foldout tent/umbrella)",
    content: "I don't think anyone have done this DIY project so i'm gonna ask if someone can make it?! I think it'll be cool and you can also score some swag points. (Also if you forget to pay your rent then you can use it too!)",
    userId: 0,
  },
  {
    title: "Wooden sculpture of macaroni picture",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: 0,
  },
  {
    title: "Program: put in animal, get correct gestures for shadow puppet",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: 0,
  },
  {
    title: "Baloon animal stampede",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: 0,
  },
  {
    title: "Apartment swimming pool",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: 0,
  },
  {
    title: "Dissolvable fake eyelashes",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: 0,
  },
  {
    title: "Food coloring super soakers for a tye dye party",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: 0,
  },
  {
    title: "Willy Wonka's chocolate factory, will pay shipping charges",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: 0,
  },
  {
    title: "Life-sized baking soda volcano",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: 1,
  },
  {
    title: "Cheddar cheese Egyptian pyramid with string cheese mummies on inside",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: 0,
  },
  {
    title: "Rube-Goldberg teleporter",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: 2,
  },
  {
    title: "Ball of Hamsters",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: 2,
  },
  {
    title: "Tennis cube",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: 0,
  },
  {
    title: "Halp",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: 1,
  },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts',
      posts.map((post, index) => { return {
        id: index,
        title: post.title,
        content: post.content,
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
