const express = require('express');
const models = require('../models');

const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    msg: "Successful GET to '/' route"
  });
});

router.post('/', (req, res) => {
  res.json({
    msg: "Successful POST to '/' route"
  });
});

router.put('/:id', (req, res) => {
  res.json({
    msg: "Successful PUT to '/' route",
    id: req.params.id
  });
});

router.delete('/:id', (req, res) => {
  res.json({
    msg: "Successful DELETE to '/' route",
    id: req.params.id
  });
});

// Returns all posts from the database
router.get('/post/', (req, res) => {
  models.Post.findAll()
    .then((allPosts) => {
      res.json(allPosts);
    })
});

// Returns the title of the search
router.get('/post/:title', (req, res) => {
  models.Post.findAll({
    where: { 
      title: { 
        $or: [
        {$like: '% ' + (req.params.title) + ' %'}, 
        {$like: (req.params.title) + ' %'}, 
        {$like: '% ' + (req.params.title)}
        ]
      }
    }
  })  
  .then(post => {
    res.json(post);
  })
});

// Returns all users from the database
router.get('/users/', (req, res) => {
  models.User.findAll()
  .then((allUsers) => {
    res.json(allUsers);
  })
});

// Returns specific user id
router.get('/users/:id', (req, res) => {
  models.User.findAll({
    where: { id: (req.params.id)}
  })
  .then(user => {
    res.json(user);
  })
});




module.exports = router;
