const { Router } = require('express');
const {
  getAllCharacters,
  postCharacter,
  findOneCharacter,
  getOneCharacter,
  putOneCharacter,
  deleteOneCharacter
} = require('../controllers/characters.controller');

const CharactersRouter = Router();

CharactersRouter
  .route('/')
  .get(getAllCharacters)
  .post(postCharacter);

CharactersRouter
  .route('/:characterId')
  .all(findOneCharacter)
  .get(getOneCharacter)
  .put(putOneCharacter)
  .delete(deleteOneCharacter);

module.exports = CharactersRouter;
