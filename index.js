var express = require('express');
var mongoose = require('mongoose');
var app = express();

var server = require('http').Server(app);
var randomString = require('randomstring');

var schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost:27017/food', function(err){
//   if(err){
//     console.log("Mongo DB Error");
//     throw err;
//   }
// })

var userSchema = new schema({
  _id : String,
  name : String
})

var User = mongoose.model('user', userSchema);

server.listen(8000);

console.log("Server Running At Port 8000");

require('./route/auth')(app, User, randomString);
