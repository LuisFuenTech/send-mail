const app = require("express").Router();
const auth = require("../services/auth");
const { userController } = require("./index");

app.post("/register", userController.registerUser);
app.post("/login", auth.ensureAuth, userController.loginUser);
app.get("/get-user/:id", auth.ensureAuth, userController.getUser);

module.exports = app;
