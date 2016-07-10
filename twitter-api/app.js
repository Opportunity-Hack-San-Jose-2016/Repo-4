/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');


// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();
var tweet = require('./routes/tweet');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.use(bodyParser.json({
   limit: '10mb',
   strict: false
 }));
 app.use(bodyParser.json({
   type: 'application/vnd.api+json',
   limit: '10mb',
   strict: false
 }));

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));


// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
app.use('/tweet',tweet);

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

//module.exports = router;
