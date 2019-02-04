const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const client = require("./routes/client");

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", client);

module.exports = app;
