var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false });

// create application/json parser
var jsonParser = bodyParser.json();

const eventCreateController = require('./../../controller/event/CreateController.js');

router.post('/create/event', jsonParser, eventCreateController.createEvent);


module.exports = router;