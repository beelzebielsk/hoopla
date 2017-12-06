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
router.use('/post', require('./post'));
router.use('/comment', require('./comment'));
router.use('/user', require('./user'));
router.use('/login', require('./login'));

module.exports = router;
