import React from 'react';
import LoginButton from './Login';

function SignIn() {
  return (
    <div className="d-flex flex-column justify-content-center mt-5 pt-5">
      <div className="d-flex flex-column align-items-center">
        <h2> Bienvenido a Marvel Heroes App</h2>
        <div>
          <p>Porfavor inicia sesion para poder acceder a la pagina </p>
        </div>
      </div>
      <div className="d-flex  justify-content-center mt-3">
        <LoginButton />
      </div>
    </div>
  );
}

export default SignIn;
