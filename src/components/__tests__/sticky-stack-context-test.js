jest.dontMock('../sticky-stack-context');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

const StickyStackContext = require('../sticky-stack-context').default;

describe('StickyStackContext', () => {
  let stickyStackContext;

  beforeEach(() => {
    window.addEventListener = jest.genMockFunction();
    window.removeEventListener = jest.genMockFunction();
    window.pageYOffset = 0;

    stickyStackContext = TestUtils.renderIntoDocument(
      <StickyStackContext />
    );
  });

  it('adds the event listener', () => {
    expect(window.addEventListener).toBeCalled();
  });

  it('removes the event listener', () => {
    stickyStackContext.componentWillUnmount();

    expect(window.removeEventListener).toBeCalled();
  });

  it('registers an item', () => {
    stickyStackContext._register(0, 10, 10);

    expect(stickyStackContext.items.length).toBe(1);
  });

  it('calculates the styles (static)', () => {
    stickyStackContext._register(0, 10, 10);
    stickyStackContext._calculateStyles();

    expect(stickyStackContext.state.styles[0]).toEqual({
      position: 'static',
    });
  });

  it('calculates the styles (fixed)', () => {
    stickyStackContext._register(0, 10, 10);
    window.pageYOffset = 11;
    stickyStackContext._calculateStyles();

    expect(stickyStackContext.state.styles[0]).toEqual({
      position: 'fixed',
      top: 0,
      width: '100%',
    });
  });

  it('calculates the styles (stacked)', () => {
    stickyStackContext._register(0, 10, 10);
    stickyStackContext._register(1, 10, 10);
    window.pageYOffset = 11;
    stickyStackContext._calculateStyles();

    expect(stickyStackContext.state.styles[1]).toEqual({
      position: 'fixed',
      top: 10,
      width: '100%',
    });
  });

  it('returns the style', () => {
    stickyStackContext._register(0, 10, 10);
    stickyStackContext._calculateStyles();

    expect(stickyStackContext._getStyle(0)).toEqual({
      position: 'static',
    });
  });
});
