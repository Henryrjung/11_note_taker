const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const mainDirectory = path.join(__dirname, "./public");
//html routes
app.get({});
app.get({});
app.get({});
//api routes
app.get({});
//new note
app.post({});
// delete note
app.delete({});

module.exports = app;