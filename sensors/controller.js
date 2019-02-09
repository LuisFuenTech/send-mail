const axios = require("axios");
const Sensor = require("./sensor");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = "http://192.168.0.14";

const getInfo = async (req, res) => {
  const data = await sensordata(req, res);

  if (data) {
    const sensors = await Sensor.find();
    res.status(200).send({ sensors });
  }
};

async function sensordata(req, res) {
  const { status, data } = await axios
    .get(`${url}/sensor`)
    .then(response => response)
    .catch(err => res.status(503).send({ Error: `Can't reach sensor` }));

  if (status == 200) {
    var { Temperature, Humidity } = data;
    var values = [
      { id: "d01", value: Temperature },
      { id: "d02", value: Humidity }
    ];

    values.map(sensor => {
      console.log(sensor.id);
      Sensor.findOneAndUpdate(
        { id: sensor.id },
        { value: sensor.value },
        { new: true }
      )
        .then(update => update)
        .catch(err => res.status(401).send(err));
    });
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getInfo
};
