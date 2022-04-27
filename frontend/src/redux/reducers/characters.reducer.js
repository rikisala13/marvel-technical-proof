/* eslint-disable default-param-last */
import actionTypes from '../actions/characters.types';

const initialState = {
  characters: [],
  error: null,
  loading: false,
  characterDelete: null,
  characterEditar: null
};

export default function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_CHARACTERS:
      return {
        ...state,
        loading: action.payload
      };
    case actionTypes.LOAD_CHARACTERS_EXIT:
      return {
        ...state,
        loading: false,
        error: null,
        characters: action.payload
      };
    case actionTypes.LOAD_CHARACTERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
