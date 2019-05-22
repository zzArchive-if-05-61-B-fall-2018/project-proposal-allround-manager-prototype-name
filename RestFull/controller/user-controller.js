const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
function createToken(user) {
    return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
        expiresIn: 86400 // 86400 expires in 24 hours
      });
}

exports.registerUser = (req,res) => {
    console.log(req.body);
    User.findOne({email: req.body.email}, (err,user) => {
        if(err){
            console.log(err);
            return res.status(400).json({'msg': err.message});
        }
        if(user){
            return res.status(400).json({'msg': 'The user already exists'});
        }
        const newUser = User(req.body);
        newUser.save((err,user) => {
            if(err){
                return res.status(400).json({'msg': err.message});
            }
            return res.status(201).json(user);
        });
    });
};

exports.loginUser = (req, res) => {
    console.log(req);
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ 'msg': 'You need to send email and password' });
    }
 
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            return res.status(400).send({ 'msg': err.message });
        }
 
        if (!user) {
            return res.status(400).json({ 'msg': 'The user does not exist' });
        }
 
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch && !err) {                
                return res.status(200).json({
                    user: user,
                    token: createToken(user)
                });
            } else {
                return res.status(400).json({ msg: 'The email and password don\'t match.' });
            }
        });
    });
};