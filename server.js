const express = require("express");
const routes = require("./routes");

const app = express();
const PORT =  process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});