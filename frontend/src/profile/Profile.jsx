import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../components/signin/Logout';

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { name, picture, email } = user;
  // TODO Wish
  // Por último, el sitio proporcionará una vista donde se visualicen los tres personajes más
  // populares. La fórmula con la que el sitio calculará la popularidad de los personajes será:
  // - Un punto por cada “me gusta” recibido
  // - Dos puntos por cada comentario publicado
  // - Multiplica por 1,5 la puntuación si la media de sus valoraciones está por encima de 7.
  // - Divide por 1,5 la puntuación si la media de sus valoraciones está por debajo de 3
  if (isLoading) {
    return <p>cargando...</p>;
  }
  return (
    isAuthenticated && (
      <div className="d-flex flex-column align-items-center pt-5 mt-5">
        <img src={picture} alt={name} />
        <h2>{name}</h2>
        <p>
          {' '}
          Tu email es
          {' '}
          {email}
        </p>
        <div className="d-flex justify-content-center">
          <LogoutButton />
        </div>
      </div>
    )
  );
}

export default Profile;
