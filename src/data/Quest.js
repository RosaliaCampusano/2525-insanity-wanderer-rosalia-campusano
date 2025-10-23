const Quest = require("../models/Quest");

const getAllQuests = async () => {
  try {
    const quests = await Quest.find();
    return quests;
  } catch (error) {
    throw error;
  }
};

const createQuest = async (questData) => {
  try {
    const newQuest = new Quest(questData);
    await newQuest.save();
    return newQuest;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllQuests, createQuest };
