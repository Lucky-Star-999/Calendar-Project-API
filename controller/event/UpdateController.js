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