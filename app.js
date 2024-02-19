require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/dbconn");
const mainRouter = require("./routes/main");
const errorHandler = require ('./middleware/errorhandler')
const notFound= require ('./middleware/notFound')
const PORT = process.env.PORT;
connectDB();

// middlewares
app.use(express.static('./public'))
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", mainRouter);

app.use(errorHandler)
app.use(notFound)

mongoose.connection.once("open", () => {
  console.log("connected mongoDB");
  app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}...`);
  })
});