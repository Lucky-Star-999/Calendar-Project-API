var express = require('express');
var router = express.Router();
const userCreateController = require('./../../controller/user/CreateController.js');
// -------------------------------------------------------------------------------------

// Response: Register successfully, The email is existed, Please fill in all field
router.post('/user', userCreateController.createUser);





// -------------------------------------------------------------------------------------
module.exports = router;