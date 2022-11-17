var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false });

// create application/json parser
var jsonParser = bodyParser.json();


module.exports = router;