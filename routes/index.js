var express = require('express');
var router = express.Router();
var http = require('http');
//define the api to recieve the json data
var url = 'http://data.sfgov.org/resource/yitu-d5am.json'
var response,pretty,parsed,location='',escapedjson,a=[];
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  http.get(url, function(res){
    var body = '';
    res.on('data', function(chunk){
      body += chunk;
    });
    res.on('end', function(){
      response = JSON.parse(body);
      //pretty print JSON 
      for(var i=0;i<response.length;i++)
      {
       // if(i =  response.length-1)
         // location += '{ "locations" : "'+ response[i].locations  +'"}';
       // else
        //  location += '{ "locations" : "'+ response[i].locations  +'"} ,';
          a.push('{ "locations" : "'+ response[i].locations  +'"}');
      //  console.log(response[i].locations);
      }
      console.log(a);
      var s= a.join(", ")
      //location = "[" + location + "]";
      escapedjson = JSON.stringify(s);
      //escapedjson = escapedjson.replace(/,\s*$/, "");
      parsed=JSON.parse(escapedjson);
      console.log(parsed);
      // pretty= JSON.stringify(response, null, 4);
    })
  }).on('error', function(e){
    console.log("the error is ",e)
  });
  res.json(parsed);
});

module.exports = router;
