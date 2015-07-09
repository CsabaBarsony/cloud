"use strict";

var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var portNumber = 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../public")));

app.listen(portNumber);

console.log("Server is running on port:" + portNumber + " ...");
