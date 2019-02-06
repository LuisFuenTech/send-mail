const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const app = express();
const { usersRoutes } = require("./users/index");

app.use(cors());
app.get("/", function(req, res, next) {
  res.send({ msg: "This is CORS-enabled for all origins!" });
});

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/control", usersRoutes);

module.exports = app;
