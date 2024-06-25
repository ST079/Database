//const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

const roleSchema = new Schema({
  role: String,
  username: { type: ObjectId, required: true },
  positionedAt: { type: Date, default: Date.now() },
});

module.exports = new model("role", roleSchema);
