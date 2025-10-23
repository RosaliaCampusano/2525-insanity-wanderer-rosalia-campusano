const mongoose = require("mongoose");
const { Schema } = mongoose;

const equiment = new Schema(
  {
    instrument: String,
    pouch: {
      coins: Number,
    },
    weigth: Number,
  },
  { _id: false }
);

const characterSchema = new Schema({
  name: String,
  ocupation: String,
  description: String,
  stamina: Number,
  favoriteDrink: String,
  equiment: equiment,
});

const Character = mongoose.model("Characters", characterSchema);

module.exports = Character;
