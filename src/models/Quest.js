const mongoose = require("mongoose");
const { Schema } = mongoose;

const questSchema = new Schema({
  day_number: Number,
  day_week: String,
  start_time: String,
  end_time: String,
  characters: [String],
  events: [eventsSchema],
});

const eventsSchema = new Schema({
  day_time: String,
  time: String,
  messages: [String],
});

const Quest = mongoose.model("Quest", questSchema);

module.exports = Quest;
