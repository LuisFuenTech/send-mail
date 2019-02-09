const mongoose = require("mongoose");
const { Schema } = mongoose;

const nodemcuSchema = new Schema(
  {
    name: { type: String, required: true },
    serial: { type: String, required: true, unique: true }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Nodemcu", nodemcuSchema);
