var apiGeocode = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
var secondHalf= '&key=AIzaSyCuT62M1HR0ZSWupooc-jge3FGdtTPhSII';
var https = require('https');
var response;
var data = {geocode : function(string){
  var complete = apiGeocode + string + ",+CA" + secondHalf;
  https.get(complete, function(res){
    var body ='';
    console.log(complete);
    // console.log(complete);
    res.on('data', function(chunk){
      body += chunk;
    })
    res.on('end', function(){
      //console.log(body);
      response = JSON.parse(body);
    })
  }).on('error',function(e){
    console.log("the error is ",e);
  });
  console.log(response);
  return response;
}
};
module.exports = data;
