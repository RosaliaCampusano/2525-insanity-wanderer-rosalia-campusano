const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const router = require("./routes/Router");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_CONNECTION = process.env.MONGO_CONNECTION;

app.use(bodyParser.json());
app.use("/quest", router);

async function start() {
  try {
    await mongoose.connect(MONGO_CONNECTION);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    console.log("Connection with MongoDB successful");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

start();
