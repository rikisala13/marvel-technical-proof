/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
// styles
import './CharacterCard.css';

export default function CharacterCard({ character }) {
  const navigate = useNavigate();
  function redirect() {
    navigate(`/character-details/${character?.id}`);
  }
  return (
    <div className="character__item">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`} alt={`${character.name}`} className="character__img" />
        <a href="#!">
          <div className="mask" />
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <button onClick={redirect} type="button" className="btn btn-dark">Saber mas</button>
      </div>
    </div>
  );
}
