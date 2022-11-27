var express = require('express');
var router = express.Router();
const userReadController = require('./../../controller/user/ReadController.js');
// -------------------------------------------------------------------------------------



// Reponses: Login successfully, Please fill in all field, Username does not exist, Wrong password
router.post('/user/login', userReadController.readPassword);

// Read user from userinformation
router.get('/user/:email', userReadController.readUser);





// -------------------------------------------------------------------------------------
module.exports = router;


//router.get('/user/:email', userReadController.readPassword);