var mongoose = require('mongoose');
var MAPS = mongoose.Schema({
  local : {
    lat:Number,
    lng:Number,
    name:String,
  }
});

module.exports = mongoose.model('MAPS',MAPS);

