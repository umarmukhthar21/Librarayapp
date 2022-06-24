var express = require('express');
var router = express.Router();
var mongoose =require('mongoose');
const jwt = require("jsonwebtoken");
const usersModel = require('../models/users');

router.post('/signup', function(req, res, next) {

  let email= req.body.email;
  let username  = req.body.username ;
  let password = req.body.password;


  let userObj = new usersModel({

      email:email,
      username:username,
      password:password,
      
  });

  userObj.save(function(err,userObj){

  if(err){
    res.send({status:500,message:'unable to add customer'})
  }
  else{
    res.send({status:200,message:'user added succesfully',userDetails:userObj})
  }
});
});

router.post("/login", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  authData
  .findOne({ email: req.body.email, password: req.body.password },(err,user)=>{
    if(err){
      console.log("error is",err)
    }
    else{
      console.log(user)
    }
  })
  .clone()
  .then((user) => {
    if(user !== null){
    let payload = { subject: user.email + user.password };
    let token = jwt.sign(payload, "secretKey");
    res.status(200).send({ token });
    }
    else{
      res.status(401).send('Wrong Credentials')
    }
  });

});









  module.exports = router;


