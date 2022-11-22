const {
    Pool
} = require('pg');

const eventDeleteQuery = require('./../../service/event/DeleteQuery.js');
const createPool = require('./../../service/CreatePool.js');

// Delete an event (Not delete invitation yet)
exports.deleteEvent = (eventid) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventDeleteQuery.deleteEvent(eventid);

        pool.query(query, (err, res) => {
            resolve(1);
            pool.end();
        })
    }));
}

// Delete an ivitation
exports.deleteInvitation = (eventid) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventDeleteQuery.deleteInvitation(eventid);

        pool.query(query, (err, res) => {
            resolve(1);
            pool.end();
        })
    }));
}

// Delete an ivitation (Guest)
exports.deleteGuestInvitation = (eventid, email) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventDeleteQuery.deleteGuestInvitation(eventid, email);

        pool.query(query, (err, res) => {
            resolve(1);
            pool.end();
        })
    }));
}


