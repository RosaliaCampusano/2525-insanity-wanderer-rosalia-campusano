const Intrument = require("../models/Instrument");

const getAllInstruments = async () => {
  try {
    const instruments = await Intrument.find();
    return instruments;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllInstruments,
};
