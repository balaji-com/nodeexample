const express = require('express');
const router = express.Router();
var passport = require('passport');
const jwt = require('jsonwebtoken');
// const session = require('express-session'),
const User = require('../models/users.js');
// require("../models/user.js");
// var User= require('mongoose').model('Item');
const config = require('../config/database');

//register
router.post('/register', (req,res,next) => {

    let newUser = new User({
    name :req.body.name,
    email:req.body.email,
    username:req.body.username,
    password:req.body.password
  });
  User.adduser(newUser,(err,users) => {
    if(err){
      res.json({success:false,msg: 'failed' });
    }else{
      res.json({success:true,msg:'Successfully'});
    }
  });

});


//Authenticate
// app.post('/authenticate', passport.authenticate('jwt', { session: false }),
//     function(req, res) {
//         res.send(req.user.profile);
//     }
// );
router.post('/authenticate',(req,res,next) => {
  const username = req.body.username;
  const password = req.body.password;
  User.getUserByUsername(username,(err,user) =>{
    if(err) throw err;
    if(!user){
      return res.json({success:false,msg:'user not found'});
    }
    User.comparePassword(password,user.password,(err,isMatch) =>{
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign({data: user}, config.secret,{
          expiresIn:604800
        });
        res.json({
          success:true,
          token:'JWT'+token,
          user:{
            id:user._id,
            name:user.name,
            username:user.username,
            email:user.email
          }
        });
      }else{
        return res.json({success:false,msg:'wrong password'});
      }
    });
  });
});


//profile
router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next) => {
  res.json({user: req.user});
});



router.get('/profiles',(req,res,next)=>{
  User.find(function(err,data){
    if(err){
      res.json(err);
    }
    else{
      res.json(data);
    }
  });
});
// router.get('/profile', passport.authenticate('jwt', { session: false }),
//     function(req, res) {
//         res.json({
//             user: req.user
//
//
//         });
//     }
// );

module.exports = router;
