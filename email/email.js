const { Schema, model } = require("mongoose");

const emailSchema = new Schema(
  {
    from: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    sent: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  { versionKey: false },
  { timestamps: true }
);

module.exports = model("Email", emailSchema);
