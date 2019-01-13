var express = require('express');
var router = express.Router();
const database = require('../database')

router.post('/create/', function(req, res, next) {
    database.signUp(req.body)
    .then(resp => {
        console.log("you did it")
        res.status(200);
        res.send({ good: "work"});

    })
    .catch(err => {
        res.status(400);
        res.send('None shall pass');
    })

});


module.exports = router;
