import { combineReducers } from 'redux';
import charactersReducer from './characters.reducer';
import comicsReducer from './comics.reducer';
import favoritesReducer from './favourites.reducer';

export default combineReducers({
  characters: charactersReducer,
  comics: comicsReducer,
  favourites: favoritesReducer
});
