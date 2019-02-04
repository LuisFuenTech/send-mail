const express = require("express");
const app = express.Router();
const ledsController = require("../controllers/leds");

app.post("/led/on/:id", ledsController.ledOn);
app.post("/led/off/:id", ledsController.ledOff);
app.get("/get-leds", ledsController.readLeds);

module.exports = app;
