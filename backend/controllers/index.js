const express = require('express');
const router = express.Router();

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.use('/', require('./home'));
router.use('/post', require('./post'))
router.use('/comment', require('./comment'))

module.exports = router;
