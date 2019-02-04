const express = require("express");
const app = express.Router();
const ledsController = require("../controllers/leds");

app.post("/led/:id/:action", ledsController.switchLed);
app.get("/get-leds", ledsController.readLeds);

module.exports = app;