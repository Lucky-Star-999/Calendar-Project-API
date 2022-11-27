var express = require('express');
var router = express.Router();
const eventUpdateController = require('./../../controller/event/UpdateController.js');
// -------------------------------------------------------------------------------------



router.put('/update/accept-invitation', eventUpdateController.acceptInvitation);

router.put('/update/decline-invitation', eventUpdateController.declineInvitation);

router.put('/event', eventUpdateController.updateEvent);



// -------------------------------------------------------------------------------------
module.exports = router;