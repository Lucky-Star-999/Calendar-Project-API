var express = require('express');
var router = express.Router();
const eventUpdateController = require('./../../controller/event/UpdateController.js');
// -------------------------------------------------------------------------------------



router.put('/update/acceptinvitation', eventUpdateController.acceptInvitation);

router.put('/update/declineinvitation', eventUpdateController.declineInvitation);



// -------------------------------------------------------------------------------------
module.exports = router;