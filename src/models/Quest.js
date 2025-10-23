const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventsSchema = new Schema(
  {
    day_time: String,
    time: String,
    messages: [String],
  },
  { _id: false }
);

const questSchema = new Schema({
  day_number: Number,
  day_week: String,
  start_time: String,
  end_time: String,
  characters_start: Array,
  events: [eventsSchema],
});

const Quest = mongoose.model("Quests", questSchema);

module.exports = Quest;
