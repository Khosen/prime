//'use strict';

var express = require('express');
var router = express.Router();

//bring in niominee model


router.get('/', function(req, res){
 
  res.render('index');
  });
 
  router.get('/desk', function(req, res){
 
    res.render('desk');
    });
   
  
router.get('/about', function(req, res){
 
  res.render('about');
  });
 

  router.get('/services', function(req, res){
 
    res.render('services');
    });
   
    
router.get('/products', function(req, res){
 
  res.render('products');
  });
 
   
   
router.get('/contact', function(req, res){
 
  res.render('contact');
  });
 
   
  
module.exports = router;
