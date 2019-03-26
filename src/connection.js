const mongoose = require('mongoose')
  , Admin = mongoose.mongo.Admin;
// mongoose.connect('mongodb://Errin:LetsGoJE@18.217.127.86:27017/onlineWebFormLeads?authSource=admin');
//
// mongoose.connection.once('open', function(){
//   console.log('Connection established');
// })
// .on('error', function(error){
//   console.log('Connection error:', error);
// });

/// create a connection to the DB
// var connection = mongoose.createConnection(
//     'mongodb://Errin:LetsGoJE@18.217.127.86:27017/onlineWebFormLeads?authSource=admin');
// connection.on('open', function() {
//   // connection established
//   new Admin(connection.db).listDatabases(function(err, result) {
//     console.log('listDatabases succeeded');
//     // database list stored in result.databases
//     var allDatabases = result.databases;
//     console.log(allDatabases);
//   });
// });

module.exports = {DB: 'mongodb://Errin:LetsGoJE@18.217.127.86:27017/onlineWebFormLeads?authSource=admin'};
