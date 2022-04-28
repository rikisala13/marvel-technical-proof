import axios from 'axios';
import actionTypes from './characters.types';

const apiURL = process.env.REACT_APP_MONGO_URL;

export function loadFavorites() {
  return async (dispatch) => {
    const { data } = await axios.get(`${apiURL}/favorites`);
    dispatch({
      type: actionTypes.LOAD_ALL_FAVORITES,
      favorites: data
    });
  };
}

export function addToFavorites(restaurant) {
  return async (dispatch) => {
    const { data } = await axios.post(`${apiURL}/favorites`, restaurant);
    dispatch({
      type: actionTypes.ADD_TO_FAVORITES,
      newFavorite: data
    });
  };
}

export function deleteFromFavorites(id) {
  return async (dispatch) => {
    await axios.delete(`${apiURL}/favorites/${id}`);
    dispatch({
      type: actionTypes.DELETE_FROM_FAVORITES,
      id
    });
  };
}
