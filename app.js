const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const app = express();
const { usersRoutes } = require("./users/index");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/control", usersRoutes);

module.exports = app;
