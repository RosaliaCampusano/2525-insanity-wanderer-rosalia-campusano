const morningMissions = (characters) => {
  mission.day_time = "morning";
  mission.time = "5:00";
  mission.messages = [
    "Preparation events starts",
    `${characters[0].name}, ${characters[1].name}, & ${characters[2].name} join the team`,
    "Preparation events ends",
  ];

  return mission;
};

const mission = {
  day_time: "",
  time: "",
  messages: [],
};

module.exports = {
  morningMissions,
};
