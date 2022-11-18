var express = require('express');
var router = express.Router();
const eventReadController = require('./../../controller/event/ReadController.js');
// -------------------------------------------------------------------------------------




router.get('/event/email/:email', eventReadController.readEventsByEmail);

router.get('/event/eventid/:eventid', eventReadController.readEventByEventid);

router.get('/event/invitation/:email', eventReadController.readInvitationsByEmail);



// -------------------------------------------------------------------------------------
module.exports = router;