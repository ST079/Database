//const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: String,
  username: String,
  password: String,
  createdAt: { type: Date, default: Date.now() },
});

module.exports = new model("User", userSchema);
