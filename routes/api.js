var apiGeocode = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
var secondHalf= '&key=AIzaSyCuT62M1HR0ZSWupooc-jge3FGdtTPhSII';
var https = require('https');
var body = '',response,complete='';
var data = {geocode : function(string){
  complete = apiGeocode + string + secondHalf;
  https.get(complete, function(res){
    res.on('data', function(chunk){
      body += chunk;
    })
    res.on('end', function(){
      console.log(body);
      response = JSON.parse(body);
    })
  }).on('error',function(e){
  console.log("the error is ",e);
  });
  return 1;
}
};
module.exports = data;
