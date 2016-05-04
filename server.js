"use strict";

const express     = require("express");
const http        = require("http");
const app         = express();
const port        = process.env.PORT || 3000;
const server      = http.createServer(app);

//serve static files with express
app.use(express.static("./public"));

//start ther server listening
server.listen(port, ()=>{
    console.log("Server listening on port: ", server.address().port);
});
