import React from 'react';

import Navbar from './Navbar';

import { render, screen } from '../../utils/test-utils';

describe('Given a Navbar component', () => {
  describe('When it is rendered', () => {
    beforeEach(() => {
      render(
        <Navbar />
      );
    });

    test('Then should render the title "Marvel"', () => {
      expect(screen.getByText(/Marvel/i)).toBeInTheDocument();
    });

    test('Then should have a button with dataid "Perfil"', () => {
      expect(screen.getByTestId('Perfil')).toBeInTheDocument();
    });
  });
});
