const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const app = express();
const { usersRoutes } = require("./users/index");

app.use(cors());

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res, next) {
  res.send({ msg: "This is CORS-enabled for all origins!" });
});

app.post("/", function(req, res, next) {
  res.send({ msg: "This is CORS-enabled for all origins!" });
});

//Cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");

  next();
});

app.use("/control", usersRoutes);

module.exports = app;
