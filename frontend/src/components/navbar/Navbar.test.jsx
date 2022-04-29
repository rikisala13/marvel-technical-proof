import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { StaticRouter } from 'react-router';

import Navbar from './Navbar';

describe('Given a Navbar component', () => {
  describe('When is rendered', () => {
    let container;
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });

    test('Then 1 nav elements should be in the document', () => {
      act(() => {
        render(<StaticRouter><Navbar /></StaticRouter>, container);
      });
      expect(container.getElementsByTagName('div').length).toBe(1);
    });
  });
});
