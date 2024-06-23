const express = require("express");
const mongoose = require("mongoose");
const indxRouter = require("./routes/index-route");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express();
const PORT = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/blog-application").then(() => {
  console.log("Database is connected");
});

app.use(express.json());
app.use(express.static("public"));
app.use("/", indxRouter);

app.use(errorMiddleware);
app.listen(PORT, () => {
  console.log("Application is running");
});
