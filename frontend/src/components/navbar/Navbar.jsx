import React from 'react';

function Navbar() {
  return (
    <div className="main-container">
      <nav className="navbar navbar-expand navbar-dark bg-dark d-flex align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png"
            className="me-2"
            height="30"
            alt="MDB Logo"
            loading="lazy"
          />
          <h2 className="navbar-brand">Marvel Heroes App</h2>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
