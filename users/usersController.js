//Using promises on mongoose
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const axios = require("axios");
const Led = require("../leds/led");
const Sensor = require("../sensors/sensor");
const typeSensors = ["d01", "dh1"];

module.exports.switchLed = (req, res) => {
  const { id, action } = req.params;

  axios
    .get(`http://192.168.1.63/led?led=${id}&action=${action}`)
    .then(response => {
      console.log(response.data);
      const { status } = response.data;

      Led.findOneAndUpdate({ id: id }, { status: status }, (err, led) => {
        console.log("Led: ", led);
        if (err) return res.status(500).send({ message: "Error on request" });

        if (!led)
          return res.status(404).send({ message: "User cannot be update" });

        return res.status(200).send({ Led: led });
      });
    })
    .catch(error => res.status(503).send({ Error: "Can't reach led out" }));
};

module.exports.getInfo = (req, res) => {
  Led.find()
    .then(leds => {
      res.status(200).send({ Leds: leds });
    })
    .catch(err => res.status(503).send({ Error: err }));
};

module.exports.readSensors = (req, res) => {
  axios
    .get(`http://192.168.1.63/sensor`)
    .then(response => {
      console.log("Sensors");
      const { Temperature, Humidity } = response.data;
      var sensors = [
        { id: "d01", value: Number(Temperature) },
        { id: "d02", value: Number(Humidity) }
      ];
      const all = sensors.map(sensor => {
        console.log(sensor.id);
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
