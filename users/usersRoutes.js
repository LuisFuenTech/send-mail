const express = require("express");
const app = express.Router();
const { usersController } = require("./index");

app.post("/led/:id/:action", usersController.switchLed);
app.get("/get-info", usersController.getInfo);
app.get("/read-sensor", usersController.readSensors);

module.exports = app;
