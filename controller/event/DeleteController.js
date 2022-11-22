const eventDeleteModel = require('./../../model/event/DeleteModel.js');

// Delete an event
exports.deleteEvent = async (req, res) => {
    await eventDeleteModel.deleteEvent(req.params.eventid);
    await eventDeleteModel.deleteInvitation(req.params.eventid);

    res.send('Delete event successfully');
}

// Delete an event (user as a host)
exports.deleteHostEvent = async (req, res) => {
    await eventDeleteModel.deleteEvent(req.params.eventid);
    await eventDeleteModel.deleteInvitation(req.params.eventid);

    res.send('Delete event successfully');
}

// Delete an event (user as a guest)
exports.deleteGuestInvitation = async (req, res) => {
    await eventDeleteModel.deleteGuestInvitation(req.params.eventid, req.params.email);

    res.send('Delete event successfully');
}