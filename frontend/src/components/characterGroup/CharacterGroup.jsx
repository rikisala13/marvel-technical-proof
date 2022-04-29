import React, { useState } from 'react';

import CharacterCard from '../characterCard/CharacterCard';
import './CharacterGroup.css';
import AfterNextPageButton from '../buttons/AfterNextPageButton';

export default function CharactersGroup() {
  // obtener los heroes del session storage
  const characters = JSON.parse(sessionStorage.getItem('characters'));
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const maximum = 100 / perPage;
  // no mostrar los heroes que no tengan imagen

  return (
    <div className="d-flex flex-column pt-5 mt-5">
      <div className="d-flex justify-content-center ">
        <AfterNextPageButton page={page} setPage={setPage} maximum={maximum} />
      </div>
      <div data-testid="characters-container" className="grid">
        {
        characters
          .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
          .map((character) => <CharacterCard character={character} key={character.id} />)
        }
      </div>
    </div>
  );
}
