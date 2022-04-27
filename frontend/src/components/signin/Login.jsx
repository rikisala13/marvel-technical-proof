import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button type="button" className="btn btn-dark" onClick={() => loginWithRedirect()}>
      Login
    </button>
  );
}

export default LoginButton;
