const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const mainDirectory = path.join(__dirname, "./public");

module.exports = app;