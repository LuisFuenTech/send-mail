const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const app = express();
const client = require("./users/usersRoutes").default.default.default.default;

//app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/leds", client);

module.exports = app;
