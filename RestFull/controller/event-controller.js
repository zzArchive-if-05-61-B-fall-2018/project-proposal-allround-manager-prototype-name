const User = require('../models/user');

exports.getEventsById = (req,res) => {
    console.log(req.body);
    getEventsById(req.body.id)
        .then(user => res.send(user));
}

exports.createEventById = (req,res) =>{
    createEvent(req.body)
        .then(us => res.status(200).send(us))
        .catch(err => res.status(400).send(err.message));
}
async function getEventsById(id){
    const us = await User
        .findById(id)
        .select({events: 1});
    console.log(us);
    return us;
}

async function createEvent(eventBody){
    const user = await User.findByIdAndUpdate(eventBody.id,{
        $addToSet: {
            events: {eventName: eventBody.name}
        }
    },{new: true});
    return user;
}