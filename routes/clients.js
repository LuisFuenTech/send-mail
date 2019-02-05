const express = require("express");
const app = express.Router();
const ledsController = require("../controllers/leds");

app.get("/led/:id/:action", ledsController.switchLed);
app.get("/get-leds", ledsController.getLeds);
app.get("/read-sensor", ledsController.readSensor);
app.get("/sensors/:temp/:humidity", ledsController.showValues);

module.exports = app;
