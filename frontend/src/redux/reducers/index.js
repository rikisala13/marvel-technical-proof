import { combineReducers } from 'redux';
import charactersReducer from './characters.reducer';
import filterReducer from './filtered.reducer';

export default combineReducers({
  characters: charactersReducer,
  filter: filterReducer
});
