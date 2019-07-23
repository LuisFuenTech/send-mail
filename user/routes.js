const app = require("express").Router();
const { userController } = require("./index");

app.get("/send-gmail", userController.sendGmail);
app.get("/send-outlook", userController.sendOutlook);
app.get("/send-delete", userController.deleteAll);

module.exports = app;
