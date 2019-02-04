const leds = [
  { id: 1, isOn: false, name: "led1" },
  { id: 2, isOn: false, name: "led2" },
  { id: 3, isOn: false, name: "led3" }
];

const ledOn = (req, res) => {
  const { id } = req.params;

  leds.map(led => {
    if (led["id"] == id) led.isOn = true;
  });

  res.status(200).send({
    leds
  });
};

const ledOff = (req, res) => {
  const { id } = req.params;

  leds.map(led => {
    if (led["id"] == id) led.isOn = false;
  });

  res.status(200).send({
    leds
  });
};

const readLeds = (req, res) => {
  res.status(200).send({
    leds
  });
};

module.exports = {
  ledOn,
  ledOff,
  readLeds
};
