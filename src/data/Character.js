const Character = require("../models/Character");

const getCharacters = async () => {
  try {
    const characters = await Character.find();
    return characters;
  } catch (error) {
    throw error;
  }
};

const assignAttributesByName = async (name, characterData) => {
  try {
    const character = Character.findOneAndUpdate(name, characterData, {
      new: true,
    });
    return character;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCharacters,
  assignAttributesByName,
};
