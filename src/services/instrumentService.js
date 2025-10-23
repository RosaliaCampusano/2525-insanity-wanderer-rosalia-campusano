const Instrument = require("../data/Instrument");

const getAllInstruments = async () => {
  try {
    const instruments = await Instrument.getAllInstruments();
    return instruments;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllInstruments };
