"use strict";

const express     = require("express");
const http        = require("http");
const app         = express();
const mongoose    = require('mongoose');
const port        = process.env.PORT || 3000;
const databaseURL = process.env.MONGODB_URI || 'mongodb://localhost/event-tracker-db';
const server      = http.createServer(app);
const morgan      = require('morgan');
const cookieParser= require('cookie-parser');
const bodyParser  = require('body-parser');

//serve static files with express
app.use(express.static("./public"));

// Setup database
mongoose.connect(databaseURL);

// Setup middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//Set the location of routes
var apiRoutes = require(__dirname + "/config/apiRoutes");
app.use(apiRoutes);

//start ther server listening
server.listen(port, ()=>{
    console.log("Server listening on port: ", server.address().port);
});
