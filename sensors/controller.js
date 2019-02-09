const axios = require("axios");
const Sensor = require("./index");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = "http://192.168.0.14";

const readSensor = async (req, res) => {
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
  readSensor
};
