// Delete an event (Not delete invitation yet)
exports.deleteEvent = (eventid) => {
    let query = 
        `DELETE FROM event WHERE eventid = '${eventid}';`;
    return query;
}

// Delete an ivitation
exports.deleteInvitation = (eventid) => {
    let query = 
        `DELETE FROM invitation WHERE eventid = '${eventid}';`;
    return query;
}

// Delete an ivitation
exports.deleteGuestInvitation = (eventid, email) => {
    let query = 
        `DELETE FROM invitation WHERE eventid = '${eventid}' AND guestemail = '${email}';`;
    return query;
}



