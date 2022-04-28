/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import actionTypes from './characters.types';

function loadComics(id) {
  const baseUrl = process.env.REACT_APP_MARVEL_URL;
  const items = {
    characters: 'characters',
    comics: 'comics',
    creators: 'creators',
    events: 'events',
    series: 'series',
    stories: 'stories'
  };
  const apikey = process.env.REACT_APP_MARVEL_APIKEY_PUBLIC;
  const hash = process.env.REACT_APP_MARVEL_HASH;
  return async (dispatch) => {
    // descargar users de la DB
    dispatch(descargaComics(id));
    try {
      const { data } = await axios(
        `${baseUrl}${items.characters}/${id}/${items.comics}?apikey=${apikey}&hash=${hash}&ts=1`
      );
      dispatch(descargarOk(data.data.results));
    } catch (error) {
      dispatch(descargarFail());
    }
  };
}

const descargaComics = () => ({
  type: actionTypes.LOAD_COMICS,
  payload: true
});

const descargarOk = (comics) => ({
  type: actionTypes.LOAD_COMICS_EXIT,
  payload: comics
});
const descargarFail = () => ({
  type: actionTypes.LOAD_COMICS_ERROR,
  payload: true
});
export {
  loadComics
};
