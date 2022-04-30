const { Router } = require('express');
const {
  getAllfavorites,
  postfavorite,
  findOnefavorite,
  getOnefavorite,
  putOnefavorite,
  deleteOnefavorite
} = require('../controllers/favorites.controller');

const favoritesRouter = Router();

favoritesRouter
  .route('/character-details/:id/favorites')
  .get(getAllfavorites)
  .post(postfavorite);

favoritesRouter
  .route('/character-details/:id/favorites')
  .all(findOnefavorite)
  .get(getOnefavorite)
  .put(putOnefavorite)
  .delete(deleteOnefavorite);

module.exports = favoritesRouter;
