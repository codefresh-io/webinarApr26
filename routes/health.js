var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/healtz', function(req, res, next) {
  res.send(200);
});

module.exports = router;
