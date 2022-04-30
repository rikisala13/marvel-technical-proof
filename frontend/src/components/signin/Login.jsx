import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button type="button" data-testid="login-button-test" className="btn btn-dark" onClick={() => loginWithRedirect()}>
      Login
    </button>
  );
}

export default LoginButton;
