const {
    Pool
} = require('pg');

const createPool = require('./../CreatePool.js');
const eventReadQuery = require('./ReadQuery.js');

const isDuplicated = (arr, x) => {
    for (let i = 0; i < arr.length; i++) {
        if (x == arr[i]) {
            return true;
        }
    }
    return false;
}

const getIdGenerated = () => {
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let idlength = 9;
    let eventidtmp = '';
    for (let i = 0; i < idlength; i++) {
        eventidtmp += characters[Math.floor(Math.random() * (characters.length - 1))];
    }
    return eventidtmp;
}

const getIdGeneratedWithCompare = (arr) => {
    let randomId = getIdGenerated();

    while (isDuplicated(arr, randomId)) {
        randomId = getIdGenerated();
    }

    return randomId;
}

const getIdEventidList = () => {
    return (new Promise((resolve, reject) => {
        let pool = createPool.createPool();
        let query = eventReadQuery.readEventid();

        pool.query(query, (err, res) => {
            let eventidlist = [];
            for (let i = 0; i < res.rows.length; i++) {
                eventidlist[i] = res.rows[i].eventid;
            }
            resolve(eventidlist);
            pool.end();
        })
    }));
}

exports.getEventid = async () => {
    let eventidList = await getIdEventidList();
    
    return getIdGeneratedWithCompare(eventidList);
}

