const eventReadModel = require('./../../model/event/ReadModel.js');

// Get all events by email
exports.readEventsByEmail = async (req, res) => {
    let result = await eventReadModel.readEventsByEmail(req.params.email);

    res.send(result);
}

// Get event by eventid
exports.readEventByEventid = async (req, res) => {
    let result = await eventReadModel.readEventByEventid(req.params.eventid);
    res.send(result);
}

// Get all invitations by email
exports.readInvitationsByEmail = async (req, res) => {
    let result = await eventReadModel.readInvitationsByEmail(req.params.email);
    res.send(result);
}

// Get pending invitations by email
exports.readPendingInvitationsByEmail = async (req, res) => {
    let result = await eventReadModel.readPendingInvitationsByEmail(req.params.email);
    res.send(result);
}