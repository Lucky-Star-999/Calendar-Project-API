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

//////////////////////// Update an event /////////////////////////
// Update an event (excluded guests)
exports.updateBasicEvent = (eventid, title, starttime, endtime, description) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventUpdateQuery.updateBasicEvent(eventid, title, starttime, endtime, description);

        pool.query(query, (err, res) => {
            resolve(1);
            pool.end();
        })
    }));
}

// Update an event (excluded guests)
exports.updateAddGuests = (eventid, guestemails) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventUpdateQuery.updateAddGuests(eventid, guestemails);

        pool.query(query, (err, res) => {
            resolve(1);
            pool.end();
        })
    }));
}

// Update an event (excluded guests)
exports.updateDeleteGuests = (eventid, guestemails) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventUpdateQuery.updateDeleteGuests(eventid, guestemails);

        pool.query(query, (err, res) => {
            resolve(1);
            pool.end();
        })
    }));
}