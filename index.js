require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const indxRouter = require("./routes/index-route");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express();
const PORT = Number(process.env.PORT);

// local host ko satta tesko id cause node js ko version update paci support garena => 127.0.0.1
mongoose.connect(process.env.DB).then(() => {
  console.log("Database connected successfully");
});

app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(process.env.VERSION, indxRouter);

app.use(errorMiddleware);
app.listen(PORT, () => {
  console.log("Application is running");
});
