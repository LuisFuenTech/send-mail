const axios = require("axios");
const Led = require("../leds/led");
const Sensor = require("../sensors/sensor");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = "http://192.168.0.14";

const switchLed = (req, res) => {
  const { id, action } = req.params;

  axios
    .get(`${url}/led?led=${id}&action=${action}`)
    .then(response => {
      const { status } = response.data;

      Led.findOneAndUpdate({ id: id }, { status: status }).then(led => {
        if (led) return res.status(200).send({ Led: id, status: action });
      });
    })
    .catch(error => res.status(503).send({ Error: "Can't reach led out" }));
};

const getInfo = async (req, res) => {
  const leds = await Led.find();
  const sensor = await Sensor.find();

  res.status(200).send({ Leds: leds, Sensor: sensor });
};

const showSensors = async (req, res) => {
  await axios.get(`${url}/sensor`).then(response => {
    var { Temperature, Humidity } = response.data;
    var sensors = [
      { id: "d01", value: Temperature },
      { id: "d02", value: Humidity }
    ];

    sensors.map(async sensor => {
      await Sensor.findOneAndUpdate(
        { id: sensor.id },
        { value: sensor.value },
        (err, update) => {
          if (update) return update;
        }
      );
    });

    res.status(200).send(response.data);
  });
};

module.exports = {
  switchLed,
  getInfo,
  showSensors
};
