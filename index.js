const express = require("express");
const indxRouter = require("./routes/index-route");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.static("public"));
app.use("/", indxRouter);

app.use(errorMiddleware);
app.listen(PORT, () => {
  console.log("Application is running");
});
