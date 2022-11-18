var express = require('express');
var router = express.Router();
const userUpdateController = require('./../../controller/user/UpdateController.js');
// -------------------------------------------------------------------------------------



// Response: Update successfully, Please fill in all fields
router.put('/user', userUpdateController.updateUser);




// -------------------------------------------------------------------------------------
module.exports = router;