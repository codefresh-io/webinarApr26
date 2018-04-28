var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', updated : new Date(), info : process.env.version });
});

module.exports = router;
