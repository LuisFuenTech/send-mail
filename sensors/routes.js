const app = require("express").Router();
const { sensorController } = require("./index");

app.get("/read-sensor", sensorController.readSensor);

module.exports = app;
