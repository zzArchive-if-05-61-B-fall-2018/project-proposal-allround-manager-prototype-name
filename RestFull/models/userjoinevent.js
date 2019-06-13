const mongoose = require('mongoose');

const UserjoineventSchema = new mongoose.Schema({
    eventId: {type:String, required: true},
    userId: {type:String, required: true},
    joined_date: {tpye:String},
});
module.exports = mongoose.model('Userjoinevent',UserjoineventSchema);
