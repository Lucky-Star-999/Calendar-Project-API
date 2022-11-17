var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false });

// create application/json parser
var jsonParser = bodyParser.json();

const eventUpdateController = require('./../../controller/event/UpdateController.js');

router.put('/update/acceptinvitation', jsonParser, eventUpdateController.acceptInvitation);

router.put('/update/declineinvitation', jsonParser, eventUpdateController.declineInvitation);

module.exports = router;