const Quest = require("../data/Quest");
const characterService = require("../services/characterService");
const instrumentService = require("../services/instrumentService");
const songsService = require("../services/songService");

const getAllQuests = async () => {
  try {
    const getAllQuests = await Quest.getAllQuests();
    return getAllQuests;
  } catch (error) {
    throw error;
  }
};

const createQuest = async (questData) => {
  try {
    const newQuest = await Quest.createQuest(questData);
    return newQuest;
  } catch (error) {
    throw error;
  }
};

const getAllData = async () => {
  const questCharacters = await characterService.getCharacters();
  const instruments = await instrumentService.getAllInstruments();
  const characters = await setCharactersToquest(questCharacters, instruments);
  const songs = await songsService.getAllSong();
  const newData = {
    characters,
    instruments,
    songs,
  };

  return newData;
};

const setCharactersToquest = async (characters, instruments) => {
  let assignedCharacters = [];
  characters.map(async (char) => {
    const instrumentAttribute = await setIntrumentToCharacter(instruments);
    const character = await characterService.assignAttributesByName(
      { name: char.name },
      { instrument: instrumentAttribute.name }
    );
    assignedCharacters.push(character);
  });

  return assignedCharacters;
};

const setIntrumentToCharacter = async (instruments) => {
  const newInstrumment =
    instruments[Math.floor(Math.random() * instruments.length)];

  return newInstrumment;
};

module.exports = { getAllQuests, createQuest, getAllData };
