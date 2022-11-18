var express = require('express');
var router = express.Router();
const eventDeleteController = require('./../../controller/event/DeleteController.js');
// -------------------------------------------------------------------------------------



router.delete('/event/:eventid', eventDeleteController.deleteEvent);



// -------------------------------------------------------------------------------------
module.exports = router;