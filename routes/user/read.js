var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false });

// create application/json parser
var jsonParser = bodyParser.json();

const userReadController = require('./../../controller/user/ReadController.js');

//router.post('/read/user/login', jsonParser, userReadController.readPassword);

router.post('/read/user/login', userReadController.readPassword);

module.exports = router;