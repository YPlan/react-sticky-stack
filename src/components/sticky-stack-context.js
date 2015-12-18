import React from 'react';

const StickyStackContext = React.createClass({

  propTypes: {
    children: React.PropTypes.any,
  },

  getInitialState() {
    return {
      styles: [],
    };
  },

  componentDidMount() {
    window.addEventListener('scroll', this._calculateStyles);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this._calculateStyles);
  },

  getChildContext() {
    return {
      getStyle: this._getStyle,
      register: this._register,
    };
  },

  _register(position, offsetTop, offsetHeight) {
    if (!this.items) {
      this.items = [];
    }
    this.items[position] = {
      offsetTop,
      offsetHeight,
    };
  },

  _getStyle(position) {
    const {styles} = this.state;

    return styles[position];
  },

  _calculateStyles() {
    const styles = [];
    this.items.reduce((height, item, index) => {
      if (window.pageYOffset + height >= item.offsetTop) {
        styles[index] = {
          position: 'fixed',
          top: height,
          width: '100%',
        };
      } else {
        styles[index] = {
          position: 'static',
        };
      }
      return height + item.offsetHeight;
    }, 0);
    this.setState({
      styles,
    });
  },

  render() {
    const {children} = this.props;

    return (
      <div>
        {children}
      </div>
    );
  },

  items: [],

  childContextTypes: {
    getStyle: React.PropTypes.func,
    register: React.PropTypes.func,
  },

});

export default StickyStackContext;
