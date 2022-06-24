var express = require('express');
var router = express.Router();
var mongoose =require('mongoose');

const libraryModel = require('../models/library');



/* GET all customer */
router.get('/list', function(req, res, next) {
  
    libraryModel.find(function(err,libraryListResponse){
  
      if(err){
        res.send({status:500,message:'unable to find customer'})
      }
      else{
        const recordCount = libraryListResponse.length;
        res.send({status:200,recordCount: recordCount,results: libraryListResponse});
      }
  
    });
  
  });

  
/* create New customer. */

  router.post('/add', function(req, res, next) {

    let bookName= req.body.bookName;
    let Author  = req.body.Author ;
    let IsbnNumber = req.body. IsbnNumber;
    let price  = req.body.price ;
    let rating = req.body.rating;
    
  
    let libraryObj = new libraryModel({
  
        bookName:bookName,
        Author :Author ,
        IsbnNumber: IsbnNumber,
        price : price ,
        rating: rating
    });
  
    libraryObj.save(function(err,libraryObj){
  
    if(err){
      res.send({status:500,message:'unable to add customer'})
    }
    else{
      res.send({status:200,message:'user added succesfully',libraryDetails:libraryObj})
    }
  });
  });

  /* Delete existing customer. */
router.delete('/delete', function(req, res, next) {
 
    const bookName = req.query.bookName;
    
    libraryModel.findByIdAndDelete(bookName,function(err,libraryResponse){
  
      if(err){
        res.send({status:500,message:'unable to delete the customer'})
      }
      else{
        
        res.send({status:200,message:'user deleted suceesfully',results:libraryResponse});
      }
  
    });
  
  
  
  
  });

  /* Update existing customer. */
router.put('/update', function(req, res, next) {
 
    const userId = req.query.userId;
  
    let libraryObj = {
  
      firstName:'Markist',
      lastName:'Merry',
      emailAddress:'test2@test.com',
      phoneNumber:'13431545',
      dob: '05-05-2021'
    };
  
    
    libraryModel.findByIdAndUpdate(userId,libraryObj,function(err,libraryResponse){
  
      if(err){
        res.send({status:500,message:'unable to update the customer'})
      }
      else{
        
        res.send({status:200,message:'user updated succesfully',results:libraryResponse});
      }
  
    });
  
  });





module.exports = router;
