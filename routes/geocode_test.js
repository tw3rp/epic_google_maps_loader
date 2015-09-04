var express = require('express');
var router = express.Router();
var http = require('http');
//geocode page
//
router.get('/', function(req,res,next){
  res.send("hello world");
});

module.exports = router;

