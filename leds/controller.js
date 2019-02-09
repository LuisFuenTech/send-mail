const axios = require("axios");
const Led = require("./index");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = "http://192.168.0.14";

const turnLed = (req, res) => {
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
  res.status(200).send({ leds });
};

module.exports = {
  turnLed,
  getInfo
};
