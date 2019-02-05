const express = require("express");
const app = express.Router();
const { nodemcuController } = require("./index");

app.post("/turn-led", nodemcuController.turnLeds);
app.get("/sensor", nodemcuController.readSensor);

module.exports = app;
