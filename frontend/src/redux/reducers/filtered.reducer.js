/* eslint-disable default-param-last */
import actionTypes from '../actions/characters.types';

export default function filterReducer(charactersList = [], action) {
  let newCharactersList = charactersList;
  switch (action.type) {
    case actionTypes.FILTER_CHARACTERS:
      newCharactersList = action.filtered;
      break;
    default:
      break;
  }
  return newCharactersList;
}
