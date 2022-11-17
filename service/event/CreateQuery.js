
// Check if the eventid exists
exports.isEventIdExists = (eventid) => {
    let query = 
        `SELECT eventid FROM event WHERE eventid = '${eventid}';`;
    return query;
}

// Create an event (not consider invitation yet)
exports.createEvent = (eventid, hostemail, title, starttime, endtime, description, target) => {
    let query = 
        `INSERT INTO event
            (eventid, hostemail, title, starttime, endtime, description, target)
        VALUES
            ('${eventid}', '${hostemail}', '${title}', '${starttime}', '${endtime}', '${description}', '${target}');`;
    return query;
}

// Add new event to table 'Invitation'
exports.createInvitation = (eventid, guestemails) => {
    guestemails = guestemails.split(' ');
    let formattedGuestemails = '';
    for (let i = 0; i < guestemails.length - 1; i++) {
        formattedGuestemails += `'${guestemails[i]}', `;
    }
    formattedGuestemails += `'${guestemails[guestemails.length - 1]}'`;

    let query = 
        `INSERT INTO invitation (eventid, guestemail, status)
        SELECT
            '${eventid}', email, 'pending'
        FROM
            userinformation
        WHERE
            email IN (${formattedGuestemails});`;
    return query;
}
