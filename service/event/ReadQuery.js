// Get all eventid
exports.readEventid = () => {
    let query = 
        `SELECT eventid FROM event;`;
    return query;
}

// Get all events by email
exports.readEventsByEmail = (email) => {
    let query = 
        `-- Event for user as a host
        SELECT
            event.eventid,
            event.hostemail email,
            title,
            description,
            to_char(
                starttime::time,
                'HH12hMI AM'
            ) starttime,
            to_char(
                endtime::time,
                'HH12hMI AM'
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
                'HH12hMI AM'
            ) starttime,
            to_char(
                endtime::time,
                'HH12hMI AM'
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
}