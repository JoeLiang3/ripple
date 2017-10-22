var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
var cors=require('cors');
/*var routes = require('./routes/index');
var users = require('./routes/users');
var Tasks=require('./routes/Tasks');*/
var Congress = require( 'propublica-congress-node' );
var client = new Congress( 'RmrxLK9M6LrHgHTjMbuoIy1sEg5nPhMMx52J4HAe' );
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
/*app.use('/', routes);
app.use('/users', users);
app.use('/Tasks',Tasks);*/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  err = new Error('Not Found');
  err.status = 404;
  next(err);
});
 
// error handlers
 
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
 
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var state_abbrev = {
        "AL": "Alabama",
        "AK": "Alaska",
        "AZ": "Arizona",
        "AR": "Arkansas",
        "CA": "California",
        "CO": "Colorado",
        "CT": "Conneticut",
        "DE": "Delaware",
        "FL": "Florida",
        "GA": "Georgia",
        "HI": "Hawaii",
        "ID": "Idaho",
        "IL": "Illinois",
        "IN": "Indiana",
        "IA": "Iowa",
        "KS": "Kansas",
        "KY": "Kentucky",
        "LA": "Louisiana",
        "ME": "Maine",
        "MD": "Maryland",
        "MA": "Massachusetts",
        "MI": "Michigan",
        "MN": "Minnesota",
        "MS": "Mississippi",
        "MO": "Missouri",
        "MT": "Montana",
        "NE": "Nebraska",
        "NV": "Nevada",
        "NH": "New Hampshire",
        "NJ": "New Jersey",
        "NM": "New Mexico",
        "NY": "New York",
        "NC": "North Carolina",
        "ND": "North Dakota",
        "OH": "Ohio",
        "OK": "Oklahoma",
        "OR": "Oregon",
        "PA": "Pennsylvania",
        "RI": "Rhode Island",
        "SC": "South Carolina",
        "SD": "South Dakota",
        "TN": "Tennessee",
        "TX": "Texas",
        "UT": "Utah",
        "VT": "Vermont",
        "VA": "Virginia",
        "WA": "Washington",
        "WV": "West Virginia",
        "WI": "Wisconsin",
        "WY": "Wyoming"
      };

var mysql = require('mysql');
var fs = require("fs");
var request = require('request');
var con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'rippleDB',
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  con.query("DROP TABLE IF EXISTS house_members; \ CREATE TABLE house_members ( \
            id int NOT NULL AUTO_INCREMENT, \ photo varchar(255) NOT NULL default '', \
            firstName varchar(255) NOT NULL default '', \ lastName varchar(255) NOT NULL default '', \
            party varchar(255) NOT NULL default '', \ homeState varchar(255) NOT NULL default '', \
            phoneNum varchar(255) NOT NULL default '', \ position varchar(255) default 'House of Rep.', \
            PRIMARY KEY (id))ENGINE=INNODB;", 
  function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  
  client.memberLists({
    congressNumber: '115',
    chamber: 'house',
    responseFormat: '.json'
  }).then(function(res) {
    num_members = res.results[0].num_results;
    for(var n = 0; n < num_members; n++)
    {
      firstName= (res.results[0].members[n].first_name).replace("'", "''");
      lastName= (res.results[0].members[n].last_name).replace("'", "''");
      partyAffil= (res.results[0].members[n].party=="D") ? "Democrat" : "Republican";
      state= state_abbrev[res.results[0].members[n].state];
      phone= (res.results[0].members[n].phone);
      bioguide= (res.results[0].members[n].id);
      var sql = "INSERT INTO house_members (photo,firstName,lastName,party,homeState,phoneNum) "
                +"VALUES ('"+bioguide+"', '"+firstName+"', '"+lastName+"', '"+partyAffil+"', '"+state+"', '"+phone+"')";
      con.query(sql, function (err, result) {
        if (err) console.log(err);
      });
      console.log("House: Line "+n);
  }});
  
  con.query("DROP TABLE IF EXISTS senate_members; \ CREATE TABLE senate_members ( \
            id int NOT NULL AUTO_INCREMENT, \ photo varchar(255) NOT NULL default '', \
            firstName varchar(255) NOT NULL default '', \ lastName varchar(255) NOT NULL default '', \
            party varchar(255) NOT NULL default '', \ homeState varchar(255) NOT NULL default '', \
            phoneNum varchar(255) NOT NULL default '', \ position varchar(255) default 'Senator', \
            PRIMARY KEY (id))ENGINE=INNODB;", 
  function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  
  client.memberLists({
    congressNumber: '115',
    chamber: 'senate',
    responseFormat: '.json'
  }).then(function(res) {
    num_members = res.results[0].num_results;
    for(var n = 0; n < num_members; n++)
    {
      firstName= (res.results[0].members[n].first_name).replace("'", "''");
      lastName= (res.results[0].members[n].last_name).replace("'", "''");
      partyAffil= (res.results[0].members[n].party=="D") ? "Democrat" : "Republican";
      state= state_abbrev[res.results[0].members[n].state];
      phone= (res.results[0].members[n].phone);
      bioguide= (res.results[0].members[n].id);
      var sql = "INSERT INTO senate_members (photo,firstName,lastName,party,homeState,phoneNum) "
                +"VALUES ('"+bioguide+"', '"+firstName+"', '"+lastName+"', '"+partyAffil+"', '"+state+"', '"+phone+"')";
      con.query(sql, function (err, result) {
        if (err) console.log(err);
      });
      console.log("Senate: Line "+n);
  }});
});


module.exports = app;