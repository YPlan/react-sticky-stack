import React from 'react';
import ReactDOM from 'react-dom';
import {StickyStackContext, StickyStackItem} from '../dist';

const App = React.createClass({
  render() {
    return (
      <StickyStackContext>
        <p>
          Lorem Ipsum
        </p>
        <StickyStackItem position={0}>
          <h1>
            Live
          </h1>
        </StickyStackItem>
        <p>
          Lorem Ipsum
        </p>
        <StickyStackItem position={1}>
          <h2>
            Your
          </h2>
        </StickyStackItem>
        <p>
          Lorem Ipsum
        </p>
        <StickyStackItem position={2}>
          <h3>
            City
          </h3>
        </StickyStackItem>
        <p>
          Lorem Ipsum
        </p>
      </StickyStackContext>
    );
  },
});

ReactDOM.render(<App />, document.body);
