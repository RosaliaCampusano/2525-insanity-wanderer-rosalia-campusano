const questService = require("../services/questService");
const mission = require("../helpers/mission");
const { setDay, selectRandomCharacters } = require("../helpers/questHelper");

const getAllQuests = async (req, res) => {
  try {
    const quests = await questService.getAllQuests();
    if (quests.length === 0) {
      return res.status(404).json({ message: "No quests found" });
    }
    res.status(200).json(quests);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving quests", error: error.message });
  }
};

const createQuest = async (req, res) => {
  const quest = await questService.getAllQuests();

  const day = setDay(quest);
  const newQuestData = await questService.getAllData();

  const characters = selectRandomCharacters(newQuestData.characters);

  const questData = {
    day_number: day.dayNumber,
    day_name: day.day,
    start_time: "5:00",
    end_time: "",
    characters_start: characters,
    events: [mission.morningMissions(characters)],
  };

  try {
    const newQuest = await questService.createQuest(questData);
    res.status(201).json(newQuest);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating quest", error: error.message });
  }
};

module.exports = { getAllQuests, createQuest };
