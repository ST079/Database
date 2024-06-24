const express = require("express");
const mongoose = require("mongoose");
const indxRouter = require("./routes/index-route");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express();
const PORT = 8000;

// local host ko satta tesko id cause node js ko version update paci support garena => 127.0.0.1
mongoose.connect("mongodb://0.0.0.0:27017/blog-application").then(() => {
  console.log("Database connected successfully");
});

app.use(express.json());
app.use(express.static("public"));
app.use("/", indxRouter);

app.use(errorMiddleware);
app.listen(PORT, () => {
  console.log("Application is running");
});
