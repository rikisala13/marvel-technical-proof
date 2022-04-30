import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../../components/signin/Logout';
import CharacterList from '../charactersList/CharactersList';

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <p>cargando...</p>;
  }
  return (
    isAuthenticated && (
      <div className="d-flex flex-column align-items-center pt-5 mt-5">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>
          {' '}
          Tu email es
          {' '}
          {user.email}
        </p>
        <div className="d-flex justify-content-center">
          {!isAuthenticated
            ? (
              <CharacterList />
            )
            : (
              <LogoutButton />
            )}
        </div>
      </div>
    )
  );
}

export default Profile;
