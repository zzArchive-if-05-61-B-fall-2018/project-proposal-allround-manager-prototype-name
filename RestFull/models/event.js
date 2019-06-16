const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    event_name: {type:String, required: true},
    date: {type:String, required: true},
    event_dis: {tpye:String},
    event_participants: {type: [String]},
    adminId: {type:String, required: true}
});
module.exports = mongoose.model('Event',EventSchema);
