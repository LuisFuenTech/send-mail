const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const sensorSchema = new Schema(
  {
    id: { type: String },
    name: { type: String },
    type: { type: String },
    value: { type: Number }
  },
  {
    versionKey: false
  }
);

module.exports = model("Sensor", sensorSchema);
