var express = require('express');
var router = express.Router();
const eventDeleteController = require('./../../controller/event/DeleteController.js');
// -------------------------------------------------------------------------------------



//router.delete('/event/:eventid', eventDeleteController.deleteEvent);

router.delete('/event/:eventid', eventDeleteController.deleteHostEvent);

router.delete('/invitation/:eventid/:email', eventDeleteController.deleteGuestInvitation);



// -------------------------------------------------------------------------------------
module.exports = router;