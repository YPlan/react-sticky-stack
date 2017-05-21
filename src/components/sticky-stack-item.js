import React from 'react';
import ReactDOM from 'react-dom';

const StickyStackItem = React.createClass({

  propTypes: {
    children: React.PropTypes.any,
    position: React.PropTypes.number,
  },

  contextTypes: {
    getStyle: React.PropTypes.func,
    register: React.PropTypes.func,
  },

  getInitialState() {
    return {
      height: null,
    };
  },

  componentDidMount() {
    const {register} = this.context;
    const {position} = this.props;
    const {offsetTop, offsetHeight} = this.domRef;

    register(position, offsetTop, offsetHeight);

    this._setHeight(offsetHeight);
  },

  _setHeight(height) {
    this.setState({
      height,
    });
  },

  render() {
    const {getStyle} = this.context;
    const {children, position} = this.props;
    const {height} = this.state;

    return (
      <div ref={domRef => this.domRef = domRef} style={{height}}>
        <div style={getStyle(position)}>
          {children}
        </div>
      </div>
    );
  },

});

export default StickyStackItem;
