const {
    Pool
} = require('pg');

const eventReadQuery = require('./../../service/event/ReadQuery.js');
const createPool = require('./../../service/CreatePool.js');

// Get all events by email
exports.readEventsByEmail = (email) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventReadQuery.readEventsByEmail(email);

        pool.query(query, (err, res) => {
            resolve(res.rows);
            pool.end();
        })
    }));
}
