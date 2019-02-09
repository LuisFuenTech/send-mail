const express = require("express");
const app = express.Router();
const { ledController } = require("./index");

app.get("/led/:id/:action", ledController.turnLed);
app.get("/get-info", ledController.getInfo);

module.exports = app;
