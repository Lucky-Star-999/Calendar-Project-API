// Accept an invitation
exports.acceptInvitation = (eventid, email) => {
    let query = 
        `UPDATE invitation SET status = 'accepted' WHERE eventid = '${eventid}' AND guestemail = '${email}';`;
    return query;
}

// Decline an invitation
exports.declineInvitation = (eventid, email) => {
    let query = 
        `UPDATE invitation SET status = 'declined' WHERE eventid = '${eventid}' AND guestemail = '${email}';`;
    return query;
}