'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.dontMock('../sticky-stack-context');

var StickyStackContext = require('../sticky-stack-context').default;

describe('StickyStackContext', function () {
  var stickyStackContext = undefined;

  beforeEach(function () {
    window.addEventListener = jest.genMockFunction();
    window.removeEventListener = jest.genMockFunction();
    window.pageYOffset = 0;

    stickyStackContext = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(StickyStackContext, null));
  });

  it('adds the event listener', function () {
    expect(window.addEventListener).toBeCalled();
  });

  it('removes the event listener', function () {
    stickyStackContext.componentWillUnmount();

    expect(window.removeEventListener).toBeCalled();
  });

  it('registers an item', function () {
    stickyStackContext._register(0, 10, 10);

    expect(stickyStackContext.items.length).toBe(1);
  });

  it('calculates the styles (static)', function () {
    stickyStackContext._register(0, 10, 10);
    stickyStackContext._calculateStyles();

    expect(stickyStackContext.state.styles[0]).toEqual({
      position: 'static'
    });
  });

  it('calculates the styles (fixed)', function () {
    stickyStackContext._register(0, 10, 10);
    window.pageYOffset = 11;
    stickyStackContext._calculateStyles();

    expect(stickyStackContext.state.styles[0]).toEqual({
      position: 'fixed',
      top: 0,
      width: '100%'
    });
  });

  it('calculates the styles (stacked)', function () {
    stickyStackContext._register(0, 10, 10);
    stickyStackContext._register(1, 10, 10);
    window.pageYOffset = 11;
    stickyStackContext._calculateStyles();

    expect(stickyStackContext.state.styles[1]).toEqual({
      position: 'fixed',
      top: 10,
      width: '100%'
    });
  });

  it('returns the style', function () {
    stickyStackContext._register(0, 10, 10);
    stickyStackContext._calculateStyles();

    expect(stickyStackContext._getStyle(0)).toEqual({
      position: 'static'
    });
  });
});