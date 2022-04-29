const Character = require('../models/character.model');

async function getAllCharacters({ query }, res) {
  try {
    const foundCharacters = await Character.find(query);
    res.json(foundCharacters);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAllCharacters
};
