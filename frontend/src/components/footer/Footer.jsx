import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-center text-white fixed-bottom">
        <div className="container p-4">
          <section className="mb-4">
            Página web desarrollada utilizando las tecnologías de React.js y Node.
            Hojas de estilos con Bootstrap y CSS, API proporcionada por MARVEL
            con los requisitos y exigencias para la Prueba Técnica.
          </section>
        </div>

        <div className="text-center p-3">
          © 2022:
          {'   '}
          <a className="text-white" href="https://github.com/rikisala13">github/ricardSala</a>
        </div>

      </footer>
    </div>
  );
}

export default Footer;
