const app = require("express").Router();
const { userController } = require("./index");

app.get("/send-email", userController.sendEmail);

module.exports = app;
