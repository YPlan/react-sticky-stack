[![Build Status](https://travis-ci.org/YPlan/react-sticky-stack.svg?branch=master)](https://travis-ci.org/YPlan/react-sticky-stack)

React Sticky Stack
==================

A Sticky Stack component for [React.js](http://facebook.github.io/react/)

Installation
------------

```sh
$ npm install react-sticky-stack --save
```

Demo
----

[https://react-sticky-stack.herokuapp.com/](https://react-sticky-stack.herokuapp.com/)

Usage
-----

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {StickyStackContext, StickyStackItem} from 'react-sticky-stack';

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

ReactDOM.render(<App />, document.getElementById('app'));
```

Test
----

```sh
$ npm test
```
