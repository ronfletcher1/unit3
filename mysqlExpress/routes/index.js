var express = require('express');
var router = express.Router();
// Use the mysql module to connect, and query from express/node
// the mysql module, is not part of the core so... we need to npm install

var mysql      = require('mysql');
const config = require('./config')
console.log(config)
var connection = mysql.createConnection(config);
connection.connect();
/* GET home page. */
router.get('/', function(req, res, next) {
  // we want to load up a list of our 
  // restaurants on the homepage.
  // These are inside of mysql.
  // inside this route, BEFORE we res.render a view
  // we want to query the db and get the data.
  // then we can send it over to the view
  
});

module.exports = router;
