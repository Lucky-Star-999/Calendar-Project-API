const userUpdateModel = require('./../../model/user/UpdateModel.js');

// Update an user
exports.updateUser = async (req, res) => {
    if (req.body.email == '' || req.body.password == '' || req.body.fullname == '') {
        res.send('Please fill in all fields');
    } else {
        await userUpdateModel.updateUser(req.body.email, req.body.password, req.body.fullname);
        res.send('Update successfully');
    }
}