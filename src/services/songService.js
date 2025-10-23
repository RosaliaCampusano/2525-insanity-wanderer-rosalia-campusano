const Song = require("../data/Song");

const getAllSong = async () => {
  try {
    const songs = await Song.getAllSongs();
    return songs;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllSong };
