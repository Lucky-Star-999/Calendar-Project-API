const userDeleteModel = require('./../../model/user/DeleteModel.js');


// Delete an user
exports.deleteUser = async (req, res) => {
    await userDeleteModel.deleteUser(req.params.email);
    res.send('Delete successfully');
}