const mongoose = require("mongoose");
const { Schema } = mongoose;

const instrumentSchema = new Schema({
  name: String,
  description: String,
});

const Instrument = mongoose.model("Instruments", instrumentSchema);

module.exports = Instrument;
