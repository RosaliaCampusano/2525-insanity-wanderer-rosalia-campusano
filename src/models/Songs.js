const mongoose = require("mongoose");
const { Schema } = mongoose;

const songSchema = new Schema({
  name: String,
  description: String,
  time: Number,
  instruments: [String],
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
