/* eslint-disable react/prop-types */
import React from 'react';
import './ComicList.css';

export default function ComicList({ comics }) {
  if (comics.length > 0) {
    return (
      <section>
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          {
            comics.map((comic) => (
              <div className="d-flex flex-column comic-item" key={comic.id}>
                <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} data-testid={`list-item-${comic.id}`} className="list-img" alt="portada" />
                <div>
                  {comic.title}
                </div>
              </div>
            ))
          }
        </div>

      </section>
    );
  }
  return (
    <div>
      <h2> Este usuario no aparece en ningun comic</h2>
    </div>
  );
}
