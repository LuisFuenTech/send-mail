const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const app = express();
const client = require("./routes/clients");

app.set("json spaces", 4);

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/leds", client);

module.exports = app;
