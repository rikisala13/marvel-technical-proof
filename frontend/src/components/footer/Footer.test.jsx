import React from 'react';

import Footer from './Footer';

import { render, screen } from '../../utils/test-utils';

describe('Given a Footer component', () => {
  describe('When it is rendered', () => {
    beforeEach(() => {
      render(
        <Footer />
      );
    });

    test('Then should render the title "MARVEL"', () => {
      expect(screen.getByText(/MARVEL/i)).toBeInTheDocument();
    });
  });
});
