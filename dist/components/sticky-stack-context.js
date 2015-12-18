'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StickyStackContext = _react2.default.createClass({
  displayName: 'StickyStackContext',

  propTypes: {
    children: _react2.default.PropTypes.any
  },

  getInitialState: function getInitialState() {
    return {
      styles: []
    };
  },
  componentDidMount: function componentDidMount() {
    window.addEventListener('scroll', this._calculateStyles);
  },
  componentWillUnmount: function componentWillUnmount() {
    window.removeEventListener('scroll', this._calculateStyles);
  },
  getChildContext: function getChildContext() {
    return {
      getStyle: this._getStyle,
      register: this._register
    };
  },
  _register: function _register(position, offsetTop, offsetHeight) {
    this.items[position] = {
      offsetTop: offsetTop,
      offsetHeight: offsetHeight
    };
  },
  _getStyle: function _getStyle(position) {
    var styles = this.state.styles;

    return styles[position];
  },
  _calculateStyles: function _calculateStyles() {
    var styles = [];
    this.items.reduce(function (height, item, index) {
      if (window.pageYOffset + height >= item.offsetTop) {
        styles[index] = {
          position: 'fixed',
          top: height,
          width: '100%'
        };
      } else {
        styles[index] = {
          position: 'static'
        };
      }
      return height + item.offsetHeight;
    }, 0);
    this.setState({
      styles: styles
    });
  },
  render: function render() {
    var children = this.props.children;

    return _react2.default.createElement(
      'div',
      null,
      children
    );
  },

  items: [],

  childContextTypes: {
    getStyle: _react2.default.PropTypes.func,
    register: _react2.default.PropTypes.func
  }

});

exports.default = StickyStackContext;