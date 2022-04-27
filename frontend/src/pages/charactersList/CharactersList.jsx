import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCharacters } from '../../redux/actions/characters.creators';

import CharactersGroup from '../../components/characterGroup/CharacterGroup';

export default function characterList() {
  const dispatch = useDispatch();
  const characters = useSelector((store) => store.characters.characters);
  useEffect(() => {
    dispatch(loadCharacters());
  }, []);

  if (characters.length > 0) {
    return (
      <section data_testid="characters-list" className="container">
        <CharactersGroup />
      </section>
    );
  }
  return (
    <section className="" />
  );
}
