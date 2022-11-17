const {
    Pool
} = require('pg');


const userCreateQuery = require('./../../service/user/CreateQuery.js');
const createPool = require('./../../service/CreatePool.js');

// Create an user
exports.createUser = (email, password, fullname) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = userCreateQuery.createUser(email, password, fullname);

        pool.query(query, (err, res) => {
            resolve(1);
            pool.end();
        })
    }));
}

exports.isEmailExists = (email, password, fullname) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = userCreateQuery.isEmailExists(email);

        pool.query(query, (err, res) => {
            resolve(res.rows);
            pool.end();
        })
    }));
}

