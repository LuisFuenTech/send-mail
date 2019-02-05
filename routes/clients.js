const express = require("express");
const app = express.Router();
const ledsController = require("../controllers/leds");

app.get("/led/:id/:action", ledsController.switchLed);
app.get("/get-leds", ledsController.getLeds);
app.get("/get-info", ledsController.getInfo);
app.get("/read-sensor", ledsController.readSensors);
app.post("/sensors", ledsController.showValues);

module.exports = app;
