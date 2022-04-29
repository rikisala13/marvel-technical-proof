const { Router } = require('express');
const {
  getAllCharacters,
  postCharacter,
  findOneCharacter,
  getOneCharacter,
  putOneCharacter,
  deleteOneCharacter
} = require('../controllers/characters.controller');

const productsRouter = Router();

productsRouter
  .route('/')
  .get(getAllCharacters)
  .post(postCharacter);

productsRouter
  .route('/:characterId')
  .all(findOneCharacter)
  .get(getOneCharacter)
  .put(putOneCharacter)
  .delete(deleteOneCharacter);

module.exports = productsRouter;
