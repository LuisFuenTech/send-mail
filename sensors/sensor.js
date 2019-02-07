const mongoose = require("mongoose");
const { Schema } = mongoose;

const sensorSchema = new Schema(
  {
    id: { type: String },
    name: { type: String },
    type: { type: String },
    valueRead: { type: String }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Sensors", sensorSchema);
