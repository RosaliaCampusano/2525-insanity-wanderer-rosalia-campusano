const Mission = require("../data/Mission");

const getAllMission = async () => {
  try {
    const mission = Mission.getAllMission();
    return mission;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllMission,
};
