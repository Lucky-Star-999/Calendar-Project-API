const eventDeleteModel = require('./../../model/event/DeleteModel.js');

// Delete an event
exports.deleteEvent = async (req, res) => {
    await eventDeleteModel.deleteEvent(req.body.eventid);
    await eventDeleteModel.deleteInvitation(req.body.eventid);

    res.send('Delete event successfully');
}