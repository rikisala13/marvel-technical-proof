import React from 'react';

import { useSelector } from 'react-redux';
import CharacterCard from '../characterCard/CharacterCard';

export default function CharactersGroup() {
  const characters = useSelector((store) => store.characters.characters);
  // no mostrar los heroes que no tengan imagen
  const cleanCharacter = characters.filter((character) => character.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available');

  return (
    <div data-testid="characters-container" className="d-flex flex-column">

      {
            cleanCharacter.map((
              character
            ) => <CharacterCard character={character} key={character.id} />)
            }
    </div>
  );
}
