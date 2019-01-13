var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.send(
    {
      users: [
        {username: 'Hello From Express'},
        {username: 'mackenzie'}, 
        {username:'anthony'}
      ]
    }
  );
});

module.exports = router;
