jest.dontMock('../sticky-stack-item');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

const StickyStackItem = require('../sticky-stack-item').default;

describe('StickyStackItem', () => {
  let register;

  beforeEach(() => {
    register = jest.genMockFunction();

    const FakeContext = React.createClass({
      propTypes: {
        children: React.PropTypes.element,
      },
      childContextTypes: {
        getStyle: React.PropTypes.func,
        register: React.PropTypes.func,
      },
      getChildContext() {
        return {
          getStyle: () => {},
          register,
        };
      },
      render() {
        return <div>{this.props.children}</div>;
      },
    });

    TestUtils.renderIntoDocument(
      <FakeContext>
        <StickyStackItem position={0} />
      </FakeContext>
    );
  });

  it('registers itself to the context', () => {
    expect(register).toBeCalled();
  });
});
