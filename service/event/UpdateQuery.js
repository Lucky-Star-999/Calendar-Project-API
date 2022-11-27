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

/////////////////////////////////////////// Update an event ///////////////////////////////////////////////////
// Update an event (excluded guests)
exports.updateBasicEvent = (eventid, title, starttime, endtime, description) => {
    let query =
        `UPDATE
            event
        SET
            title = '${title}',
            starttime = '${starttime}',
            endtime = '${endtime}',
            description = '${description}'
        WHERE
            eventid = '${eventid}'`;
    return query;
}

// Add guests
exports.updateAddGuests = (eventid, guestemails) => {
    let query =
        `INSERT INTO invitation (eventid, guestemail, status)
        SELECT
            '${eventid}' eventid,
            sub.guestemail,
            'pending' status
        FROM
        (
            SELECT
                unnest(string_to_array('${guestemails}', ' ')) guestemail
            EXCEPT
            SELECT
                guestemail
            FROM
                invitation
            WHERE
                eventid = '${eventid}'
        ) sub`;
    return query;
}

// Delete guests
exports.updateDeleteGuests = (eventid, guestemails) => {
    let query =
        `DELETE FROM invitation
        WHERE
            guestemail IN (
                SELECT
                    sub.guestemail
                FROM
                (
                    SELECT
                        guestemail
                    FROM
                        invitation
                    WHERE
                        eventid = '${eventid}'
                    EXCEPT
                    SELECT
                        unnest(string_to_array('${guestemails}', ' ')) guestemail
                ) sub
            )
            AND eventid = '${eventid}'`;
    return query;
}