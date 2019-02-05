const { leds } = require("../db.json");

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

const readLeds = (req, res) => {
  res.status(200).send({
    leds
  });
};

module.exports = {
  switchLed,
  readLeds
};
