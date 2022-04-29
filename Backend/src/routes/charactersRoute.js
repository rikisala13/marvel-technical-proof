const { Router } = require('express');
const {
  getAllCharacters
} = require('../controllers/characters.controller');

const productsRouter = Router();

productsRouter
  .route('/')
  .get(getAllCharacters);

module.exports = productsRouter;
