const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const app = express();
const { usersRoutes } = require("./users/index");
const { nodemcuRoutes } = require("./nodemcu/index");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/control", usersRoutes);
app.use("/nodemcu", nodemcuRoutes);

module.exports = app;
