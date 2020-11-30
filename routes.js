const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const mainDirectory = path.join(__dirname, "./public");
//html routes
app.get("/notes", function(req, res) {
    res.sendFile(path.join(mainDirectory, "notes.html"));
});
app.get("/api/notes", function(req, res) {
    res.sendFile(path,join(__dirname, "./db/db.json"));
});
app.get("/api/notes/:id", function(req, res) {
    const saves = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(saves[Number(req.params.id)]);
});
//api routes
app.get("*", function(req, res) {
    res.sendFile(path.join(mainDirectory, "index.html"));
});
//new note
app.post({});
// delete note
app.delete({});

module.exports = app;