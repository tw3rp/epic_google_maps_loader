var mongoose = require('mongoose');
var models = require('../models/maps');

var conn = mongoose.connection;

var uri='mongodb://heroku_vfp6w0c0:6ghh5u7fmejj6r1jjt5030vpk7@ds033143.mongolab.com:33143/heroku_v';

conn.on('error', function(){
    console.log("connected to "+uri);
});

mongoose.connect(uri);
module.exports = conn;
