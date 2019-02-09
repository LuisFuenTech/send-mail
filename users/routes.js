const app = require("express").Router();
const { userController } = require("./index");

app.post("/register", userController.registerUser);
app.post("/login", userController.loginUser);

module.exports = app;
