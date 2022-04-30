const CompleteFavorite = require('../models/favorite.model');

async function getAllFavorites({ query }, res) {
  try {
    const foundFavorites = await CompleteFavorite.find(query);
    res.json(foundFavorites);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function postFavorite(req, res) {
  try {
    const newCaracter = await CompleteFavorite.create(req.body);

    res.status(201);
    res.json(newCaracter);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function findOneFavorite(req, res, next) {
  const { FavoriteId } = req.params;
  try {
    const Favorite = await CompleteFavorite.findById(FavoriteId);

    if (Favorite) {
      req.Favorite = Favorite;
      next();
    } else {
      res.status(404);
      res.send(new Error(`There is no Favorite with id ${FavoriteId}`));
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function getOneFavorite({ Favorite }, res) {
  return res.send(Favorite);
}

async function putOneFavorite(req, res) {
  const dataToUpdate = req.body;
  const { FavoriteId } = req.params;

  try {
    const updatedBeer = await CompleteFavorite.findByIdAndUpdate(
      FavoriteId,
      dataToUpdate,
      { new: true }
    );

    res.json(updatedBeer);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneFavorite(req, res) {
  const { FavoriteId } = req.params;

  try {
    await CompleteFavorite.findByIdAndDelete(FavoriteId);

    res.status(204);
    res.json();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAllFavorites,
  postFavorite,
  findOneFavorite,
  getOneFavorite,
  putOneFavorite,
  deleteOneFavorite
};
