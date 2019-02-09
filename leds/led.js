const mongoose = require("mongoose");
const { Schema } = mongoose;

const ledSchema = new Schema(
  {
    id: { type: Number },
    name: { type: String },
    status: { type: String }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Led", ledSchema);
