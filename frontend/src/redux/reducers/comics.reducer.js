/* eslint-disable default-param-last */
import actionTypes from '../actions/characters.types';

const initialState = {
  comics: [],
  error: null,
  loading: false,
  comicDelete: null,
  comicEditar: null
};

export default function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_COMICS:
      return {
        ...state,
        loading: action.payload
      };
    case actionTypes.LOAD_COMICS_EXIT:
      return {
        ...state,
        loading: false,
        error: null,
        comics: action.payload
      };
    case actionTypes.LOAD_COMICS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
