const {
    Pool
} = require('pg');

const eventUpdateQuery = require('./../../service/event/UpdateQuery.js');
const createPool = require('./../../service/CreatePool.js');

// Accept an invitation
exports.acceptInvitation = (eventid, email) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventUpdateQuery.acceptInvitation(eventid, email);

        pool.query(query, (err, res) => {
            resolve(1);
            pool.end();
        })
    }));
}

// Decline an invitation
exports.declineInvitation = (eventid, email) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventUpdateQuery.declineInvitation(eventid, email);

        pool.query(query, (err, res) => {
            resolve(1);
            pool.end();
        })
    }));
}