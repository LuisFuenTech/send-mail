const express = require("express");
const app = express.Router();
const userController = require("./index");

app.post("/led/:id/:action", userController.switchLed);
app.get("/get-info", userController.getInfo);
app.get("/read-sensor", userController.readSensors);

module.exports = app;
