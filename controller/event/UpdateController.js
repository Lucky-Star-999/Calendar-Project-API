const eventUpdateModel = require('./../../model/event/UpdateModel.js');

// Accept an invitation
exports.acceptInvitation = async (req, res) => {
    await eventUpdateModel.acceptInvitation(req.body.eventid, req.body.email);

    res.send('Accept event successfully');
}

// Decline an invitation
exports.declineInvitation = async (req, res) => {
    await eventUpdateModel.declineInvitation(req.body.eventid, req.body.email);

    res.send('Decline event successfully');
}

// Update an event
exports.updateEvent = async (req, res) => {
    await eventUpdateModel.updateBasicEvent(req.body.eventid, req.body.title, req.body.starttime,
        req.body.endtime, req.body.description);
    await eventUpdateModel.updateAddGuests(req.body.eventid, req.body.guestemails);
    await eventUpdateModel.updateDeleteGuests(req.body.eventid, req.body.guestemails);

    res.send('Update event successfully');
}