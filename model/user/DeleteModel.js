const {
    Pool
} = require('pg');


const userDeleteQuery = require('./../../service/user/DeleteQuery.js');
const createPool = require('./../../service/CreatePool.js');


// Delete an user
exports.deleteUser = (email) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = userDeleteQuery.deleteUser(email);

        pool.query(query, (err, res) => {
            resolve(1);
            pool.end();
        })
    }));
}