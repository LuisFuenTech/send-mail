const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String },
  surname: { type: String },
  city: { type: String },
  age: { type: Number, min: 16 },
  email: { type: String },
  username: { type: String }
});

module.exports = mongoose.model("Users", userSchema);
