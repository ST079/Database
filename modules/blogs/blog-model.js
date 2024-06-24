//const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, default: Date.now() },
  catagories: { type: Array },
  content: { type: String },
  words: { type: Number, required: true },
  time: { type: Number },
  featuredImage: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

module.exports = new model("Blogs", blogSchema);
