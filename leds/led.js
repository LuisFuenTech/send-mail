const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ledSchema = new Schema(
  {
    id: { type: Number },
    name: { type: String },
    status: { type: String }
  },
  { versionKey: false }
);

module.exports = model("Led", ledSchema);
