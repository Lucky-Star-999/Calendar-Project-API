var express = require('express');
var router = express.Router();
const eventReadController = require('./../../controller/event/ReadController.js');
// -------------------------------------------------------------------------------------




router.post('/read/event/email', eventReadController.readEventsByEmail);



// -------------------------------------------------------------------------------------
module.exports = router;