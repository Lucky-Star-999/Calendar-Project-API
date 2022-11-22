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
exports.readInvitationsByEmail = (email) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventReadQuery.readInvitationsByEmail(email);

        pool.query(query, (err, res) => {
            resolve(res.rows);
            pool.end();
        })
    }));
}

// Get all pending invitations by email
exports.readPendingInvitationsByEmail = (email) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventReadQuery.readPendingInvitationsByEmail(email);

        pool.query(query, (err, res) => {
            resolve(res.rows);
            pool.end();
        })
    }));
}
