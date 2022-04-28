/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './AfterNextPageButton.css';

function AfterNextPageButton({ page, setPage, maximum }) {
  const [input, setInput] = useState(1);

  function nextPage() {
    setInput(parseInt(input, 10) + 1);
    setPage(parseInt(page, 10) + 1);
  }
  function previousPage() {
    setInput(parseInt(input, 10) - 1);
    setPage(parseInt(page, 10) - 1);
  }
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setPage(parseInt(e.target.value, 10));
      if (
        parseInt(e.target.value < 1, 10)
      || parseInt(e.target.value, 10) > Math.ceil(maximum)
      || Number.isNaN(parseInt(e.target.value, 10))
      ) {
        setPage(1);
        setInput(1);
      } else {
        setPage(parseInt(e.target.value, 10));
      }
    }
  };
  const onChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-row">
      <button type="button" disabled={page <= 1} className="btn btn-light text-white bg-dark paginacion mr-3" onClick={previousPage}>
        {'<'}
      </button>
      <input
        onKeyDown={(e) => onKeyDown(e)}
        onChange={(e) => onChange(e)}
        type="text"
        name="page"
        autoComplete="off"
        value={input}
        className="border input-paginacion border-light rounded"
      />

      <p className="text-white p-paginacion ml-3">
        de
        {maximum}
      </p>
      <button type="button" disabled={page >= Math.ceil(maximum)} className="btn btn-light text-white bg-dark paginacion ml-3" onClick={nextPage}>
        {'>'}
      </button>
    </div>
  );
}

export default AfterNextPageButton;
