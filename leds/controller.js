const axios = require("axios");
const Led = require("./led");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = "http://192.168.0.14";

const turnLed = async (req, res) => {
  const { id, action } = req.params;

  const { status, data } = await axios
    .get(`${url}/led?led=${id}&action=${action}`)
    .then(response => response)
    .catch(error => res.status(503).send({ Error: `Can't reacch led` }));

  if (status == 200) {
    Led.findOneAndUpdate(
      { id: data.Led },
      { status: data.status },
      { new: true }
    )
      .then(led => {
        if (led) return res.status(200).send({ led });
        else return res.status(401).send({ Error: `Led didn't found` });
      })
      .catch(err => res.status(401).send({ Error: `Can't reach led` }));
  }
};

const getInfo = async (req, res) => {
  const leds = await Led.find();
  res.status(200).send({ leds });
};

module.exports = {
  turnLed,
  getInfo
};
