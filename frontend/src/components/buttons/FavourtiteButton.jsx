/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import emptyHeart from '../../assets/emptyHeart.svg';
import fullHeart from '../../assets/fullHeart.svg';
import {
  addToFavorites,
  deleteFromFavorites
} from '../../redux/actions/favourites.creators';

function FavoritesButton() {
  const favorites = useSelector((store) => store.favorites);
  const dispatch = useDispatch();

  const characters = JSON.parse(sessionStorage.getItem('characters'));
  const [character, setcharacter] = useState('');
  function isFavorite(characterId) {
    const isAlreadyInFavorite = favorites.some((id) => id === characterId);
    return isAlreadyInFavorite;
  }
  const { id } = useParams();
  function changeFavourite(characterId) {
    if (isFavorite(id, favorites)) {
      dispatch(deleteFromFavorites(characterId));
    } else {
      dispatch(addToFavorites(character));
    }
  }
  useEffect(() => {
    const currentCharacter = id && characters.find((item) => +item.id === +id);
    setcharacter(currentCharacter);
  }, [id]);
  return (
    <button
      className="heart-button"
      type="button"
      onClick={() => changeFavourite(character.id)}
    >
      hello
      <figure>
        <img
          src={isFavorite(character.id, favorites) ? fullHeart : emptyHeart}
          alt="favorite-icon"
        />
      </figure>
    </button>
  );
}

export default FavoritesButton;
