import React from 'react';
import ReactDOM from 'react-dom';
import {StickyStackContext, StickyStackItem} from '../dist';

const App = React.createClass({
  render() {
    return (
      <StickyStackContext>

        <div className="divider divider--short" />

        <StickyStackItem position={0}>
          <div className="content">
            <div className="logo">
              <img className="logo__img" src="sticky-stack.svg" />
            </div>
          </div>
        </StickyStackItem>

        <div className="divider" />

        <StickyStackItem position={1}>
          <div className="content">
            <div className="block block--tall" />
          </div>
        </StickyStackItem>

        <div className="divider" />

        <StickyStackItem position={2}>
          <div className="content">
            <div className="block" />
          </div>
        </StickyStackItem>

        <div className="divider" />

        <StickyStackItem position={3}>
          <div className="content">
            <div className="block block--short" />
          </div>
        </StickyStackItem>

        <div className="divider" />

        <StickyStackItem position={4}>
          <div className="content">
            <div className="block block--content">
              <a className="link" href="https://github.com/YPlan/react-sticky-stack">Fork me on Github</a>
            </div>
          </div>
        </StickyStackItem>

        <div className="divider divider--short" />

        <StickyStackItem position={5}>
          <div className="content">
            <div className="block block--credits">
              <p>Made with ❤ by <a href="https://yplanapp.com">YPlan</a></p>
            </div>
          </div>
        </StickyStackItem>

        <div className="divider" />

      </StickyStackContext>
    );
  },
});

ReactDOM.render(<App />, document.getElementById('app'));
