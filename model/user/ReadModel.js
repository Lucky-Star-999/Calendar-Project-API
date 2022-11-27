const {
    Pool
} = require('pg');


const userReadQuery = require('./../../service/user/ReadQuery.js');
const createPool = require('./../../service/CreatePool.js');

// Read password from userinformation
exports.readPassword = (email) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = userReadQuery.readPassword(email);

        pool.query(query, (err, res) => {
            resolve(res.rows);
            pool.end();
        })
    }));
}

// Read user from userinformation
exports.readUser = (email) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = userReadQuery.readUser(email);

        pool.query(query, (err, res) => {
            resolve(res.rows);
            pool.end();
        })
    }));
}