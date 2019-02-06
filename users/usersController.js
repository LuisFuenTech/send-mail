const axios = require("axios");
//var { leds, readSensor, sensors } = require("../db.json");

module.exports.switchLed = (req, res) => {
  const { id, action } = req.params;

  axios
    .get(`http://192.168.1.60/led?led=${id}&action=${action}`)
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(503).send({ Error: "Can't reach led" }));
};

module.exports.getInfo = (req, res) => {
  axios
    .get("http://192.168.1.60/hello")
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(503).send({ Error: error }));
};

module.exports.readSensors = (req, res) => {
  axios
    .get(`http://192.168.1.60/sensor`)
    .then(response => res.status(200).send(response.data))
    .catch(error => res.status(503).send({ Error: "Can't reach sensor" }));
};
