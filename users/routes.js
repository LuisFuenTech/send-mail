const app = require("express").Router();
const { userController } = require("./index");

app.post("/register", userController.registerUser);

module.exports = app;
