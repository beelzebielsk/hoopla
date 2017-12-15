const express = require('express');
const router = express.Router();
const passport = require("passport");
const {strategy} = require("./authenticator");


passport.use(strategy);
router.use(passport.initialize());
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

router.use('/posts', require('./post'));
router.use('/comments', require('./comment'));
router.use('/users', require('./user'));
router.use('/categories', require('./category'));
router.use('/login', require('./login'));
//router.use('/', require('./home'));

module.exports = router;
