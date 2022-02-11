var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Api Fractus Version 3.0.0' });
});

module.exports = router;
