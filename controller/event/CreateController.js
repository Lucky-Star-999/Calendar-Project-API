const eventCreateModel = require('./../../model/event/CreateModel.js');

const eventIdGenerator = require('./../../service/event/EventIdGenerator.js');

// Create an event (including invitation)
exports.createEvent = async (req, res) => {

    let startDateAndTime = req.body.starttime.split("T");
    let starttime = startDateAndTime[0] + ' ' + startDateAndTime[1] + ':00+07';
    let endDateAndTime = req.body.endtime.split("T");
    let endtime = endDateAndTime[0] + ' ' + endDateAndTime[1] + ':00+07';


    if (req.body.hostemail == '' || req.body.title == '' || 
        req.body.starttime == '' || req.body.endtime == '' || req.body.target == '') {
        res.send('Please fill in all fields');
    } else {
        let eventid = await eventIdGenerator.getEventid();
        await eventCreateModel.createEvent(eventid, req.body.hostemail, req.body.title,
                starttime, endtime, req.body.description, req.body.target);
        // req.body.guestemails: 'admin2@gmail.com admin3@gmail.com admin9@gmail.com'
        await eventCreateModel.createInvitation(eventid, req.body.guestemails);

        res.send('Create successfully');
    }
}


