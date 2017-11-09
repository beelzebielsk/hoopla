const express = require('express');
const router = express.Router();

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.use('/alt', require('./alt'));
router.use('/', require('./home'));


module.exports = router;
