const mongoose = require("mongoose");
const { Schema } = mongoose;

const ledSchema = new Schema(
  {
    id: { type: String },
    name: { type: String },
    status: { type: String }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Leds", ledSchema);
