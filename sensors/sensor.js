const mongoose = require("mongoose");
const { Schema } = mongoose;

const sensorSchema = new Schema(
  {
    id: String,
    name: String,
    type: String,
    valueRead: Number
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Sensors", sensorSchema);
