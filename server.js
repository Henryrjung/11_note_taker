const express = require("express");
const routes = require("./routes");

const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./public'));
app.use(routes);

app.listen(port, function() {
    console.log(`Server running on port ${port}`);
})