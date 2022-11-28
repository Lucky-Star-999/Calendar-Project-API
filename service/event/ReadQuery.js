// Get all eventid
exports.readEventid = () => {
    let query = 
        `SELECT eventid FROM event;`;
    return query;
}

// Get all events by email
/*exports.readEventsByEmail = (email) => {
    let query = 
        `-- Event for user as a host
        SELECT
            event.eventid,
            event.hostemail email,
            title,
            description,
            to_char(
                starttime::time,
                'HH12:MI AM'
            ) starttime,
            to_char(
                endtime::time,
                'HH12:MI AM'
            ) endtime,
            CASE
                WHEN to_char(endtime - starttime, 'DD') = '00' THEN to_char(endtime - starttime, 'HH24hMI')
                ELSE to_char(endtime - starttime, 'DD') || 'd ' || to_char(endtime - starttime, 'HH24hMI')
            END duration,
            to_char(starttime::date, 'DD/MM/YYYY') startdate,
            CASE 
                WHEN starttime < now() THEN 'true'
                ELSE 'false'
            END isoverdued,
            '1' ishost
        FROM
            event
        WHERE
            hostemail = '${email}'
        
        UNION
        
        -- Event for user as a guest
        SELECT
            event.eventid,
            invitation.guestemail email,
            title,
            description,
            to_char(
                starttime::time,
                'HH12:MI AM'
            ) starttime,
            to_char(
                endtime::time,
                'HH12:MI AM'
            ) endtime,
            CASE
                WHEN to_char(endtime - starttime, 'DD') = '00' THEN to_char(endtime - starttime, 'HH24hMI')
                ELSE to_char(endtime - starttime, 'DD') || 'd ' || to_char(endtime - starttime, 'HH24hMI')
            END duration,
            to_char(starttime::date, 'DD/MM/YYYY') startdate,
            CASE 
                WHEN starttime < now() THEN 'true'
                ELSE 'false'
            END isoverdued,
            '0' ishost
        FROM
            event
            JOIN invitation
                ON invitation.eventid = event.eventid
        WHERE
            invitation.guestemail = '${email}'
            AND status = 'accepted';`;
    return query;
}*/

// Get events by email (user as a host)
exports.readEventsByEmail = (email, keySearch) => {
    let query = 
        `-- Event for user as a host
        SELECT
            event.eventid,
            event.hostemail email,
            title,
            description,
            to_char(
                starttime::time,
                'HH12:MI AM'
            ) starttime,
            to_char(
                endtime::time,
                'HH12:MI AM'
            ) endtime,
            CASE
                WHEN to_char(endtime - starttime, 'DD') = '00' THEN to_char(endtime - starttime, 'HH24hMI')
                ELSE to_char(endtime - starttime, 'DD') || 'd ' || to_char(endtime - starttime, 'HH24hMI')
            END duration,
            to_char(starttime::date, 'DD/MM/YYYY') startdate,
            CASE 
                WHEN starttime < now() THEN 'true'
                ELSE 'false'
            END isoverdued,
            '1' ishost
        FROM
            event
        WHERE
            hostemail = '${email}'
			AND title LIKE '%${keySearch}%'`;
	//console.log(query);
    return query;
}

// Get event by eventid
exports.readEventByEventid = (eventid) => {
    let query = 
        `SELECT
            eventid,
            hostemail,
            title,
            to_char(starttime::timestamp, 'DD-MM-YYYY HH24:MI') starttime,
            to_char(endtime::timestamp, 'DD-MM-YYYY HH24:MI') endtime,
            description,
            target,
            (SELECT string_agg(guestemail, ' ') guestemails FROM invitation WHERE eventid = '${eventid}'),
	        (SELECT string_agg(status, ' ') gueststatuses FROM invitation WHERE eventid = '${eventid}')
        FROM
            event
        WHERE
            eventid = '${eventid}'`;
    return query;
}

// Get all invitations by email
/*exports.readInvitationsByEmail = (email) => {
    let query = 
        `-- Invitations
        SELECT
            event.eventid,
            invitation.guestemail email,
            title,
            description,
            to_char(
                starttime::time,
                'HH12:MI AM'
            ) starttime,
            to_char(
                endtime::time,
                'HH12:MI AM'
            ) endtime,
            CASE
                WHEN to_char(endtime - starttime, 'DD') = '00' THEN to_char(endtime - starttime, 'HH24hMI')
                ELSE to_char(endtime - starttime, 'DD') || 'd ' || to_char(endtime - starttime, 'HH24hMI')
            END duration,
            to_char(starttime::date, 'DD/MM/YYYY') startdate,
            CASE 
                WHEN starttime < now() THEN 'true'
                ELSE 'false'
            END isoverdued,
            '0' ishost
        FROM
            event
            JOIN invitation
                ON invitation.eventid = event.eventid
        WHERE
            invitation.guestemail = '${email}'
            AND status = 'pending';`;
    return query;
}*/

// Get pending invitations by email
exports.readPendingInvitationsByEmail = (email, keySearch) => {
    let query = 
        `-- Invitations
        SELECT
            event.eventid,
            invitation.guestemail email,
            title,
            description,
            to_char(
                starttime::time,
                'HH12:MI AM'
            ) starttime,
            to_char(
                endtime::time,
                'HH12:MI AM'
            ) endtime,
            CASE
                WHEN to_char(endtime - starttime, 'DD') = '00' THEN to_char(endtime - starttime, 'HH24hMI')
                ELSE to_char(endtime - starttime, 'DD') || 'd ' || to_char(endtime - starttime, 'HH24hMI')
            END duration,
            to_char(starttime::date, 'DD/MM/YYYY') startdate,
            CASE 
                WHEN starttime < now() THEN 'true'
                ELSE 'false'
            END isoverdued,
            '0' ishost
        FROM
            event
            JOIN invitation
                ON invitation.eventid = event.eventid
        WHERE
            invitation.guestemail = '${email}'
            AND status = 'pending'
			AND title LIKE '%${keySearch}%';`;
    return query;
}

// Get invitations by email (user as a guest)
exports.readInvitationsByEmail = (email, keySearch) => {
    let query = 
        `
        -- Event for user as a guest
        SELECT
            event.eventid,
            invitation.guestemail email,
            title,
            description,
            to_char(
                starttime::time,
                'HH12:MI AM'
            ) starttime,
            to_char(
                endtime::time,
                'HH12:MI AM'
            ) endtime,
            CASE
                WHEN to_char(endtime - starttime, 'DD') = '00' THEN to_char(endtime - starttime, 'HH24hMI')
                ELSE to_char(endtime - starttime, 'DD') || 'd ' || to_char(endtime - starttime, 'HH24hMI')
            END duration,
            to_char(starttime::date, 'DD/MM/YYYY') startdate,
            CASE 
                WHEN starttime < now() THEN 'true'
                ELSE 'false'
            END isoverdued,
            '0' ishost
        FROM
            event
            JOIN invitation
                ON invitation.eventid = event.eventid
        WHERE
            invitation.guestemail = '${email}'
            AND status = 'accepted'
			AND title LIKE '%${keySearch}%';`;
    return query;
}