const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {type:String, required: true},
    lastName: {type: String, required: true},
    birthday: String,
    email: {type: String,required: true},
    password: {type: String, required: true},
    notifications: [String]
});

UserSchema.pre('save',  function(next) {
    var user = this;
 
     if (!user.isModified('password')) return next();
 
     bcrypt.genSalt(10, function(err, salt) {
         if (err) return next(err);
 
         bcrypt.hash(user.password, salt, function(err, hash) {
             if (err) return next(err);
 
             user.password = hash;
             next();
         });
     });
});
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
module.exports = mongoose.model('User',UserSchema);