const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");
const { userRoutes } = require("./users/index");
const { sensorRoutes } = require("./sensors/index");
const { ledRoutes } = require("./leds/index");

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

app.get("/test", async (req, res) => {
  const data = await axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.data)
    .catch(err => "Axion doesnt work");

  console.log(data);
  res.status(200).send(data);
});

app.use("/user/", userRoutes);

app.use("/sensor", sensorRoutes);
app.use("/led", ledRoutes);
app.get("/home", (req, res) => {
  res.status(200).send("Welcome to Smart home Automation");
});

module.exports = app;
