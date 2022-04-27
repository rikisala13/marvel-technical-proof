/* eslint-disable no-use-before-define */
import axios from 'axios';
import actionTypes from './characters.types';

function loadCharacters() {
  const baseUrl = process.env.REACT_APP_MARVEL_URL;
  const items = {
    characters: 'characters',
    comics: 'comics',
    creators: 'creators',
    events: 'events',
    series: 'series',
    stories: 'stories'
  };
  const limit = 'limit=20';
  const offset = 'offset=0';
  const apikey = process.env.REACT_APP_MARVEL_APIKEY_PUBLIC;
  const hash = process.env.REACT_APP_MARVEL_HASH;
  return async (dispatch) => {
    dispatch(descargaCharacters());
    try {
      const { data } = await axios(
        `${baseUrl}${items.characters}?ts=1&${limit}&${offset}&apikey=${apikey}&hash=${hash}`
      );
      console.log(data);
      dispatch(descargarOk(data.data.results));
    // descargar users de la DB
    } catch (error) {
      dispatch(descargarFail());
    }
  };
}

const descargaCharacters = () => ({
  type: actionTypes.LOAD_CHARACTERS,
  payload: true
});

const descargarOk = (characters) => ({
  type: actionTypes.LOAD_CHARACTERS_EXIT,
  payload: characters
});
const descargarFail = () => ({
  type: actionTypes.LOAD_CHARACTERS_ERROR,
  payload: true
});

function filterStatus() {
  return {
    type: actionTypes.FILTER_STATUS,
    filterStatus: 'false'
  };
}
function filterCharacters(inputValue, characters) {
  if (!inputValue) {
    return {
      type: actionTypes.FILTER_CHARACTERS,
      filtered: []
    };
  }
  const filteredList = characters?.filter((character) => character?.title.toLowerCase().includes(
    inputValue.toLowerCase()
  ));
  console.log(filteredList);

  return {
    type: actionTypes.FILTER_CHARACTERS,
    filtered: filteredList
  };
}

export {
  loadCharacters,
  filterCharacters,
  filterStatus
};
