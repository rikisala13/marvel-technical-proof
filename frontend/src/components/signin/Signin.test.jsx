import React from 'react';

import SignIn from './SignIn';

import { render, screen } from '../../utils/test-utils';

describe('Given a SignIn component', () => {
  describe('When it is rendered', () => {
    beforeEach(() => {
      render(
        <SignIn />
      );
    });

    test('Then should render the title "Marvel"', () => {
      expect(screen.getByText(/Marvel/i)).toBeInTheDocument();
    });
  });
});
