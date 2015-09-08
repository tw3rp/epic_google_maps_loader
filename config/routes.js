var express= require('express');
var index = require('../routes/index');
var geocode = require('../routes/geocode_test.js')
//setup routes here so the fromework becomes modular
//
var router  = {setupRoutes: function(app){
  app.use('/',index);
  app.use('/geocode',geocode)
}
};
module.exports = router;
