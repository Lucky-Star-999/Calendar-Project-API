const {
    Pool
} = require('pg');


const userUpdateQuery = require('./../../service/user/UpdateQuery.js');
const createPool = require('./../../service/CreatePool.js');


// Update an user
exports.updateUser = (email, password, fullname) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = userUpdateQuery.updateUser(email, password, fullname);

        pool.query(query, (err, res) => {
            resolve(1);
            pool.end();
        })
    }));
}
