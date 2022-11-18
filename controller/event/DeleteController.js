const eventDeleteModel = require('./../../model/event/DeleteModel.js');

// Delete an event
exports.deleteEvent = async (req, res) => {
    await eventDeleteModel.deleteEvent(req.params.eventid);
    await eventDeleteModel.deleteInvitation(req.params.eventid);

    res.send('Delete event successfully');
}