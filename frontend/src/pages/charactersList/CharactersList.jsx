import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCharacters } from '../../redux/actions/characters.creators';

import CharactersGroup from '../../components/characterGroup/CharacterGroup';
import './CharactersList.css';

export default function characterList() {
  const dispatch = useDispatch();
  const characters = useSelector((store) => store.characters.characters);

  // obtener los heroes del store
  // almacenar heroes en el session Storage
  sessionStorage.setItem('characters', JSON.stringify(characters));
  // mandar request a la Api para pedir heroes
  useEffect(() => {
    dispatch(loadCharacters());
  }, []);

  if (characters.length > 0) {
    return (
      <section data_testid="characters-list" data-testid="characters-container" className="section__character-list">
        <CharactersGroup />
      </section>
    );
  }
  return (
    <section className="" />
  );
}
