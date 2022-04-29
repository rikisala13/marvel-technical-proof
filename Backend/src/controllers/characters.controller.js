const CompleteCharacter = require('../models/character.model');

async function getAllCharacters({ query }, res) {
  try {
    const foundCharacters = await CompleteCharacter.find(query);
    res.json(foundCharacters);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function postCharacter(req, res) {
  try {
    const newCaracter = await CompleteCharacter.create(req.body);

    res.status(201);
    res.json(newCaracter);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function findOneCharacter(req, res, next) {
  const { characterId } = req.params;
  try {
    const character = await CompleteCharacter.findById(characterId);

    if (character) {
      req.character = character;
      next();
    } else {
      res.status(404);
      res.send(new Error(`There is no character with id ${characterId}`));
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function getOneCharacter({ character }, res) {
  return res.send(character);
}

async function putOneCharacter(req, res) {
  const dataToUpdate = req.body;
  const { characterId } = req.params;

  try {
    const updatedBeer = await CompleteCharacter.findByIdAndUpdate(
      characterId,
      dataToUpdate,
      { new: true }
    );

    res.json(updatedBeer);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneCharacter(req, res) {
  const { characterId } = req.params;

  try {
    await CompleteCharacter.findByIdAndDelete(characterId);

    res.status(204);
    res.json();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAllCharacters,
  postCharacter,
  findOneCharacter,
  getOneCharacter,
  putOneCharacter,
  deleteOneCharacter
};
