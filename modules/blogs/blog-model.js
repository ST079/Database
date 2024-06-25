//const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

const blogSchema = new Schema({
  title: String,
  author: { type: ObjectId, ref: "User" },
  publishedDate: { type: Date, default: Date.now() },
  catagories: Array,
  content: String,
  words: Number,
  time: { type: Number },
  featuredImage: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

module.exports = new model("Blogs", blogSchema);
