import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import * as moment from 'moment';
import axios from 'axios';
import mongoose from 'mongoose';
let mongoDB = 'mongodb://Errin:LetsGoJE@18.217.127.86:27017/onlineWebFormLeads?authSource=admin';
// mongoose.connect(mongoDB);
//
// mongoose.Promise = global.Promise;
//
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// const MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');

// const url = 'mongodb://Errin:LetsGoJE@18.217.127.86:27017/onlineWebFormLeads?authSource=admin';

/// create a connection to the DB
// var connection = mongoose.createConnection(
//     'mongodb://Errin:LetsGoJE@18.217.127.86:27017/onlineWebFormLeads?authSource=admin');
// connection.on('open', function() {
//     // connection established
//     new Admin(connection.db).listDatabases(function(err, result) {
//         console.log('listDatabases succeeded');
//         // database list stored in result.databases
//         var allDatabases = result.databases;
//         console.log(allDatabases);
//     });
// });

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      phone: '',
      email: '',
      gender: '',
      zip: '',
      dob: '',
      military: '',
      citizenship: '',
      contactPref: '',
      terms: ''
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this._onSelectMil = this._onSelectMil.bind(this);
    this._onSelectCit = this._onSelectCit.bind(this);
    this._onSelectCont = this._onSelectCont.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleDateChange(date) {
    this.setState({
      dob: date
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
     [name]: value
    });
  }

  _onSelect(e){
    this.setState({gender: e.value});
  }

  _onSelectMil(e){
    this.setState({military: e.value});
  }

  _onSelectCit(e){
    this.setState({citizenship: e.value});
  }

  _onSelectCont(e){
    this.setState({contactPref: e.value});
  }

  handleSubmit(e){
    e.preventDefault();
    var data = {"lead":
      [{
        "fname": this.state.fname,
        "lname": this.state.lname,
        "phone": this.state.phone,
        "email": this.state.email,
        "gender": this.state.gender,
        "zip": this.state.zip,
        "dob": moment(this.state.dob).format('YYYY-MM-DD'),
        "military": this.state.military,
        "citizenship": this.state.citizenship,
        "contactPref": this.state.contactPref,
        "terms": this.state.terms,
      }]
    };
    //console.log(data);
    // Database Name
    const dbName = 'onlineWebFormLeads';

    // Use connect method to connect to the Server
    // MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    //   assert.equal(null, err);
    //   console.log("Connected successfully to server");
    //
    //   const db = client.db(dbName);
    //   client.close();
    // });
    // MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    //   console.log('DATABASES', db);
    //   if (err) {console.log(err)};
    //   //var dbo = db.db("onlineWebFormLeads");
    //   db.collection("ledger").insertOne(data, function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    //     db.close();
    //   });
    // });
    // axios.post('http://18.217.127.86:6061/submitOnlineWebForm', data)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    fetch("http://18.217.127.86:6061/submitOnlineWebForm", {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://18.217.127.86:6062/'
      },
      body:  JSON.stringify(data)
    })
    .then(function(response){
      console.log(response);
      // return response.json();
    })
    .then(function(data){

    })
    .catch(function(err){
      console.log(err);
    });
    // var headers = {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    //   'Accept': 'application/json',
    //   'Access-Control-Allow-Credentials': 'true',
    //   'Access-Control-Allow-Origin': 'http://localhost:3001',
    //   'Content-Type': 'application/json',
    // }
    // axios.post('http://18.217.127.86:6061/submitOnlineWebForm',headers, {data})
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   });
    //window.location.reload();
  }

  render() {
    const options = [
      'Male', 'Female'
    ];

    const optionsTwo = [
      'Active', 'Prior', 'Never'
    ];
    const optionsThree = [
      'US Citizen', 'Non-US Citizen'
    ];
    const optionsFour = [
      'Call', 'Text', 'Email'
    ];

    return (
        <div className="FullForm" id="userForm">
          <form onSubmit={this.handleSubmit}>
            <div className="FormItem">
              <label className="LabelD">
                First Name*<br/>
                <input onChange={this.handleInputChange} className="doubleInput" type="text" name="fname" />
              </label>
              <label className="LabelD">
                Last Name*<br/>
                <input onChange={this.handleInputChange} className="doubleInput" type="text" name="lname" />
              </label>
            </div>

            <div className="FormItem">
              <label className="LabelD">
                Phone Number*<br/>
                <input onChange={this.handleInputChange} className="doubleInput" type="text" name="phone" />
              </label>
              <label className="LabelD">
                Email*<br/>
                <input onChange={this.handleInputChange} className="doubleInput" type="text" name="email" />
              </label>
            </div>

            <div className="FormItem">
              <label className="LabelS">
                Gender*<br/>
                <Dropdown options={options} type="text" onChange={this._onSelect} name="gender" value={this.state.gender} placeholder="Select an option" />
              </label>
            </div>

            <div className="FormItem">
              <label className="LabelS">
                Zip Code*<br/>
                <input onChange={this.handleInputChange} className="singleInput" type="text" name="zip" />
              </label>
            </div>

            <div className="FormItem">
              <label className="LabelS">
                Date of Birth*<br/>
                <DatePicker
                  className="singleInput"
                  showYearDropdown
                  selected={this.state.dob}
                  onChange={this.handleDateChange}
                  placeholderText="Please select your birthday"
                />
              </label>
            </div>

            <div className="FormItem">
              <label className="LabelS">
                Are you currently or have you ever been in the military?*<br/>
                <Dropdown options={optionsTwo} name="military" onChange={this._onSelectMil} value={this.state.military} placeholder="Select an option" />
              </label>
            </div>

            <div className="FormItem">
              <label className="LabelS">
                What is your citizenship status?*<br/>
                <Dropdown options={optionsThree} name="citizenship" onChange={this._onSelectCit} value={this.state.citizenship} placeholder="Select an option" />
              </label>
            </div>

            <div className="FormItem">
              <label className="LabelS">
                What is your contact preference*<br/>
                <Dropdown options={optionsFour} name="contactPref" onChange={this._onSelectCont} value={this.state.contactPref} placeholder="Select an option" />
              </label>
            </div>

            <div className="FormItem">
              <label className="LabelSI">
                I confirm that I am over 17 years of age*
                <input
                  name="terms"
                  type="checkbox"
                  checked={this.state.terms}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>

            <input className="submitBtn" type="submit" value="Submit" />
          </form>
        </div>
    );
  }
}

export default Form;
