const app = require("express").Router();
const auth = require("../services/auth");
const { ledController } = require("./index");

app.get("/:id/:action", ledController.turnLed);
app.get("/get-info", ledController.getInfo);

//app.get("/:id/:action", auth.ensureAuth, ledController.turnLed);
//app.get("/get-info", auth.ensureAuth, ledController.getInfo);
module.exports = app;
