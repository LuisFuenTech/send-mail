const { leds, readSensor, sensors } = require("../db.json");

const switchLed = (req, res) => {
  const { id, action } = req.params;

  leds.forEach(led => {
    if (led.name === id) {
      led.isOn = action == "on" ? true : false;
    }
  });

  res.status(200).json({
    success: true,
    message: "Led updated"
  });
};

const getLeds = (req, res) => {
  res.status(200).send({
    leds
  });
};

const readSensor = (req, res) => {
  readSensor = !readSensor;

  res.status(200).send({
    readSensor
  });
};

const showValues = (req, res) => {
  readSensor = !readSensor;
  const { temp, humidity } = req.params;
  sensors[0]["temp"] = temp;
  sensors[0]["humidity"] = humidity;

  res.status(200).send({
    sensors
  });
};

module.exports = {
  switchLed,
  getLeds,
  readSensor,
  showValues
};
