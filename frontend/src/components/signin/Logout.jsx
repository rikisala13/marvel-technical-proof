/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const navigate = useNavigate();
  function redirect() {
    sessionStorage.clear();
    document.cookie = 'auth0.ujb8XDvfdTk8W76Q0oySrKNqSdw3R2hF.is.authenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = '_legacy_auth0.ujb8XDvfdTk8W76Q0oySrKNqSdw3R2hF.is.authenticated; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate('/login');
  }
  return (
    <button type="button" className="btn btn-dark" onClick={redirect}>LogOut</button>

  );
}

export default LogoutButton;
