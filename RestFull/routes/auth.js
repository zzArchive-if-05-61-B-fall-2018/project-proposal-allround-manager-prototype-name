const express = require('express');
const userController = require('../controller/user-controller');
const router = express.Router();

router.get('/', (req,res)=>{
    return res.send([{id: 1, name: "Christian"},{id:2,name:"Daniel"}]);
});

router.post('/register',userController.registerUser);

router.post('/login',userController.loginUser);

router.post('/user',userController.getUserInfoPerId);
module.exports = router;