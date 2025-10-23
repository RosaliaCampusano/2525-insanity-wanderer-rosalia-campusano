const mongoose = require("mongoose");
const { Schema } = mongoose;

const characterSchema = new Schema({
  name: String,
  ocupation: String,
  description: String,
  stamina: Number,
  favoriteDrink: String,
  equiment: equiment,
});

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

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
