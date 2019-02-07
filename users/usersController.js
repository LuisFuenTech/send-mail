const axios = require("axios");
const Led = require("../leds/led");
const Sensor = require("../sensors/sensor");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const switchLed = (req, res) => {
  const { id, action } = req.params;

  axios
    .get(`http://192.168.1.63/led?led=${id}&action=${action}`)
    .then(response => {
      console.log(response.data);
      const { status } = response.data;

      Led.findOneAndUpdate({ id: id }, { status: status }).then(led => {
        console.log(led);
        if (led) return res.status(200).send({ Led: id, status: action });
      });
    })
    .catch(error => res.status(503).send({ Error: "Can't reach led out" }));
};

const getInfo = (req, res) => {
  Led.find()
    .then(leds => {
      res.status(200).send({ Leds: leds });
    })
    .catch(err => res.status(503).send({ Error: err }));
};

const readSensors = (req, res) => {
  axios
    .get(`http://192.168.1.63/sensor`)
    .then(response => {
      console.log("Sensors");
      const { Temperature, Humidity } = response.data;
      var sensors = [
        { id: "d01", value: Temperature },
        { id: "d02", value: Humidity }
      ];
      const all = sensors.map(sensor => {
        Sensor.findOneAndUpdate(
          { id: sensor.id },
          { valueRead: sensor.value },
          (err, update) => {
            return update;
          }
        );
      });

      res.status(200).send({ All: all });
    })
    .catch(error => res.status(503).send({ Error: "Can't reach sensor" }));
};

module.exports = {
  switchLed,
  getInfo,
  readSensors
};
