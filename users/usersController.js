var { leds, readSensor, sensors } = require("../db.json");

const switchLed = (req, res) => {
  //Make the request to nodemcu switch states of leds
};

const getInfo = (req, res) => {
  //Read values from database and show them to users
};

const readSensors = (req, res) => {
  //Make the request to nodemcu read sensors
};

module.exports = {
  switchLed,
  readSensors,
  getInfo
};
