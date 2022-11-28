const {
    Pool
} = require('pg');

const eventReadQuery = require('./../../service/event/ReadQuery.js');
const createPool = require('./../../service/CreatePool.js');

// Get all events by email
exports.readEventsByEmail = (email, keySearch) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventReadQuery.readEventsByEmail(email, keySearch);

        pool.query(query, (err, res) => {
            resolve(res.rows);
            pool.end();
        })
    }));
}

// Get event by eventid
exports.readEventByEventid = (eventid) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventReadQuery.readEventByEventid(eventid);

        pool.query(query, (err, res) => {
            resolve(res.rows);
            pool.end();
        })
    }));
}


// Get all invitations by email
exports.readInvitationsByEmail = (email, keySearch) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventReadQuery.readInvitationsByEmail(email, keySearch);

        pool.query(query, (err, res) => {
            resolve(res.rows);
            pool.end();
        })
    }));
}

// Get all pending invitations by email
exports.readPendingInvitationsByEmail = (email, keySearch) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventReadQuery.readPendingInvitationsByEmail(email, keySearch);

        pool.query(query, (err, res) => {
            resolve(res.rows);
            pool.end();
        })
    }));
}
