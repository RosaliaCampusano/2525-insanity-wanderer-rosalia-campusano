const Character = require("../data/Character");

const getCharacters = async () => {
  try {
    const characters = await Character.getCharacters();
    return characters;
  } catch (error) {
    throw error;
  }
};

const assignAttributesByName = async (name, characterData) => {
  try {
    const newCharacter = await Character.assignAttributesByName(
      name,
      characterData,
      { new: true }
    );
    return newCharacter;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCharacters,
  assignAttributesByName,
};
