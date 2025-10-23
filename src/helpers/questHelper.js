const setDay = (quests) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let newDay = "";
  let newDayNumber = 0;

  quests.map((quest) => {
    days.map((day, index) => {
      if (quest.day_week === day) {
        if (newDay === "Sunday") {
          newDay = day[0];
          newDayNumber = index;
        } else {
          newDay = day[index + 1];
          newDayNumber = index;
        }
      }
    });
  });

  return {
    day: newDay,
    dayNumber: newDayNumber,
  };
};

const selectRandomCharacters = (characters) => {
  let selectedCharacters = [];

  while (selectedCharacters.length < 3) {
    const character = characters[Math.floor(Math.random() * characters.length)];
    selectedCharacters.push(character);
  }
  return selectedCharacters;
};

module.exports = {
  setDay,
  selectRandomCharacters,
};
