var express = require('express');
var router = express.Router();
const userDeleteController = require('./../../controller/user/DeleteController.js');
// -------------------------------------------------------------------------------------

// Response: Delete successfully
router.delete('/user/:email', userDeleteController.deleteUser);


// -------------------------------------------------------------------------------------
module.exports = router;