const { Schema, model } = require("mongoose");

const regestrationModel = new Schema({
  email: String,
  password: String,
  confirmPassword: String,
});

module.exports = new model("Regestration", regestrationModel);
