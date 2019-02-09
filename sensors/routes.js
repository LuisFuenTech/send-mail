const app = require("express").Router();
const auth = require("../services/auth");
const { sensorController } = require("./index");

app.get("/get-info", auth.ensureAuth, sensorController.getInfo);

module.exports = app;
