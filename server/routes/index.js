var express = require('express');
const signupRouter = require('./signup');

// var mongoose = require('mongoose');

var router = express.Router();

/* GET home page. When loaded */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
