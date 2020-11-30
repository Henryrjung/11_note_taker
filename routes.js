const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const mainDirectory = path.join(__dirname, "./public");

let savedEntries = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

//html routes
app.get("/notes", function(req, res) {
    res.sendFile(path.join(mainDirectory, "notes.html"));
});
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./db/db.json"));
});
app.get("/api/notes/:id", function(req, res) {
    res.json(savedEntries[Number(req.params.id)]);
});
//api routes
app.get("*", function(req, res) {
    res.sendFile(path.join(mainDirectory, "index.html"));
});
//new note
app.post("/api/notes", function(req, res) {
    let newEntry = req.body;
    let entryId = (savedEntries.length).toString();
    newEntry.id = entryId;
    savedEntries.push(newEntry);

    fs.writeFileSync("./db/db.json", JSON.stringify(savedEntries));
    console.log("Note saved to db.json. Content: ", newEntry);
    res.json(savedEntries);
});
// delete note
app.delete("/api/notes/:id", function(req, res) {
    let currentId = req.params.id;
    let newId = 0;
    savedEntries = savedEntries.filter(currentEntry => {
        return currentEntry.id != currentId;
    })
    
    for (currentEntry of savedEntries) {
        currentEntry.id = newId.toString();
        newId++;
    }

    fs.writeFileSync("./db/db.json", JSON.stringify(savedEntries));
    res.json(savedEntries);
});

module.exports = app;