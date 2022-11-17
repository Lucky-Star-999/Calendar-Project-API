const eventReadModel = require('./../../model/event/ReadModel.js');

// Get all events by email
exports.readEventsByEmail = async (req, res) => {
    let result = await eventReadModel.readEventsByEmail(req.body.email);

    res.send(result);
}
