const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const app = express();
const redirectToHTTPS = require("express-http-to-https").redirectToHTTPS;
const { userRoutes } = require("./users/index");

app.use(cors());

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res, next) {
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

app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));

app.use("/user", userRoutes);
app.get("/home", (req, res) => {
  res.status(200).send("Hola Guap@s");
});

module.exports = app;
