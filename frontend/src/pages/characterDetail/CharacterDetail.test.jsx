import React from 'react';
import CharacterDetail from './CharacterDetail';
import { render, screen } from '../../utils/test-utils';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    comicId: '1010673'
  })
}));
describe('given a Detail component', () => {
  describe('When there are  Detail', () => {
    test('Then create img should be in the document', () => {
      const initialState = {
        characters: [
          {
            id: 1010673,
            name: 'Amphibian (Earth-712)',
            description: '',
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
              extension: 'jpg'
            }
          }
        ]
      };
      render(<CharacterDetail />, { initialState });
      expect(screen.getByTestId('list-item-1010673')).toBeInTheDocument();
    });
  });
});
