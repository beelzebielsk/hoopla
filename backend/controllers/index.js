const express = require('express');
const router = express.Router();
const passport = require("passport");
const {strategy} = require("./authenticator");


passport.use(strategy);
router.use(passport.initialize());
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//router.use('/', require('./home'));
router.use('/posts', require('./post'));
router.use('/comments', require('./comment'));
router.use('/users', require('./user'));
router.use('/categories', require('./category'));
router.use('/login', require('./login'));

module.exports = router;
