const userReadModel = require('./../../model/user/ReadModel.js');

// Read password from userinformation
exports.readPassword = async (req, res) => {
    if (req.body.email == '' || req.body.password == '') {
        res.send('Please fill in all field');
    } else {
        let passwordFromDatabase = await userReadModel.readPassword(req.body.email);

        if (passwordFromDatabase.length == 0) {
            res.send('Username does not exist');
        } else {
            if (req.body.password == passwordFromDatabase[0].password) {
                res.send('Login successfully');
            } else {
                res.send('Wrong password');
            } 
        }
    }
}