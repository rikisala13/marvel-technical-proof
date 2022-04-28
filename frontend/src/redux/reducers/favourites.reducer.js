/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable max-len */
/* eslint-disable default-param-last */
import actionTypes from '../actions/characters.types';

const initialState = {
  favourites: [],
  error: null,
  loading: false,
  favouriteDelete: null,
  favouriteEditar: null
};
function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_ALL_FAVORITES:
      return {
        ...state,
        loading: false,
        error: null,
        favourites: action.payload
      };

    case actionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        loading: false,
        favourites: [...state.favourites, action.payload]
      };

    case actionTypes.DELETE_FROM_FAVORITES:
      return {
        ...state,
        favourites: state.favourites.filter((fav) => fav.id
        !== state.favouriteDelete),
        favouriteDelete: null
      };
      //   favourites = state.filter((restaurant) => restaurant.id !== action.id);

    case actionTypes.UPDATE_RESTAURANT_FAV:
      return {
        ...state,
        favouriteEditar: null,
        favourites: state.characters.map((fav) => (fav.id === action.payload.id ? fav = action.payload : fav))
      };
    default:
      return state;
  }
}

export default favoritesReducer;
