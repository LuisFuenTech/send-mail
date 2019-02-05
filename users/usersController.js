var { leds, readSensor, sensors } = require("../db.json");

const switchLed = (req, res) => {
  //Make the request to nodemcu switch states of leds
  //if response is 200 then update db and notify user
};

const getInfo = (req, res) => {
  //Read values from database and Nodemcu and show them to users
  //if response is 200 then update db and notify user
};

const readSensors = (req, res) => {
  //Make the request to nodemcu read sensors
  //if response is 200 then update db and notify user
};

module.exports = {
  switchLed,
  readSensors,
  getInfo
};
