const Song = require("../models/Song");

const getAllSongs = async () => {
  try {
    const songs = await Song.find();
    return songs;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSongs,
};
