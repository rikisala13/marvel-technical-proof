import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FavoritesButton from '../../components/buttons/FavourtiteButton';
import ComicList from '../../components/comicList/ComicList';
import { loadComics } from '../../redux/actions/comics.creators';
import './CharacterDetail.css';

export default function CharacterDetail() {
  const dispatch = useDispatch();
  const characters = JSON.parse(sessionStorage.getItem('characters'));
  const { id } = useParams();
  const [character, setcharacter] = useState('');
  // obtener los heroes del store
  const comics = useSelector((store) => store.comics.comics);
  // almacenar heroes en el session Storage
  sessionStorage.setItem('comics', JSON.stringify(comics));
  useEffect(() => {
    const currentCharacter = id && characters.find((item) => +item.id === +id);
    setcharacter(currentCharacter);
  }, [id]);
  useEffect(() => {
    dispatch(loadComics(id));
  }, []);
  return (
    <main className="character__details mt-5 pt-5 ">
      <h2 className="character__detail-title">

        {character.name}

      </h2>
      <div className="character__detail-top">
        <img data-testid="create-img" className="character__detail-img" src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`} alt="character" />
        <div>
          <FavoritesButton />
        </div>
        <section>
          <div className="character__detail-creators" data-testid={`list-item-${character.id}`}>
            <h3 className="character__detail-creator">
              Description:
              {' '}
              {
               character.description !== 0
                 ? character?.description
                 : <p> este personaje no dispone de Descripcion</p>
              }
            </h3>
            <div>
              {
                  comics.length === 1
                    ? (
                      <div>
                        <h3>
                          listado del
                          {' '}
                          {comics.length}
                          {' '}
                          comic en el que aparece este personaje:
                        </h3>
                        <div />
                        <ComicList comics={comics} />
                      </div>
                    ) : (
                      <div>
                        <h3>
                          listado de los
                          {' '}
                          {comics.length}
                          {' '}
                          comics en los que aparece este personaje:
                        </h3>
                        <div />
                        <ComicList comics={comics} />
                      </div>
                    )
                }
            </div>
          </div>
          <div />
        </section>
      </div>
    </main>
  );
}
