require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/dbconn");
const mainRouter = require("./routes/main");
const PORT = process.env.PORT;
connectDB();

// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", mainRouter);

mongoose.connection.once("open", () => {
  console.log("connected mongoDB");
  app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}...`);
  })
});