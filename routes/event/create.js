var express = require('express');
var router = express.Router();
const eventCreateController = require('./../../controller/event/CreateController.js');
// -------------------------------------------------------------------------------------

router.post('/event', eventCreateController.createEvent);







// -------------------------------------------------------------------------------------
module.exports = router;