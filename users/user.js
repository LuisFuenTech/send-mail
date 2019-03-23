const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    nodemcu: { type: String },
    password: { type: String, required: true }
  },
  { versionKey: false }
);

module.exports = model("User", userSchema);
