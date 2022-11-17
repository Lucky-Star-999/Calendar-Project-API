const {
    Pool
} = require('pg');

const eventCreateQuery = require('./../../service/event/CreateQuery.js');
const createPool = require('./../../service/CreatePool.js');

// Check if the eventid exists
exports.isEventIdExists = (eventid) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventCreateQuery.isEventIdExists(eventid);

        pool.query(query, (err, res) => {
            resolve(res.rows);
            pool.end();
        })
    }));
}

// Create an event (Not including invitation)
exports.createEvent = (eventid, hostemail, title, starttime, endtime, description, target) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventCreateQuery.createEvent(eventid, hostemail, title, starttime, endtime, description, target);

        pool.query(query, (err, res) => {
            resolve(1);
            pool.end();
        })
    }));
}

// Create invitation
exports.createInvitation = (eventid, guestemails) => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventCreateQuery.createInvitation(eventid, guestemails);

        pool.query(query, (err, res) => {
            resolve(1);
            pool.end();
        })
    }));
}
