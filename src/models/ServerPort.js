// ServerPort.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for ServerPort
const ServerPort = new Schema({
  fname: {
    type: String
  },
  lname: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  gender: {
    type: String
  },
  zip: {
    type: String
  },
  dob: {
    type: String
  },
  military: {
    type: String
  },
  citizenship: {
    type: String
  },
  contactPref: {
    type: String
  },
  terms: {
    type: String
  },
  timestamp: {
      type: Date,
      default: Date.now
  }
},{
    collection: 'webFormLeads'
});

module.exports = mongoose.model('ledger', ServerPort);
