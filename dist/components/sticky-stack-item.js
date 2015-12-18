'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StickyStackItem = _react2.default.createClass({
  displayName: 'StickyStackItem',

  propTypes: {
    children: _react2.default.PropTypes.any,
    position: _react2.default.PropTypes.number
  },

  getInitialState: function getInitialState() {
    return {
      height: null
    };
  },
  componentDidMount: function componentDidMount() {
    var register = this.context.register;
    var position = this.props.position;

    var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(this);

    var offsetTop = _ReactDOM$findDOMNode.offsetTop;
    var offsetHeight = _ReactDOM$findDOMNode.offsetHeight;

    register(position, offsetTop, offsetHeight);

    this._setHeight(offsetHeight);
  },
  _setHeight: function _setHeight(height) {
    this.setState({
      height: height
    });
  },
  render: function render() {
    var getStyle = this.context.getStyle;
    var _props = this.props;
    var children = _props.children;
    var position = _props.position;
    var height = this.state.height;

    return _react2.default.createElement(
      'div',
      { style: { height: height } },
      _react2.default.createElement(
        'div',
        { style: getStyle(position) },
        children
      )
    );
  },

  contextTypes: {
    getStyle: _react2.default.PropTypes.func,
    register: _react2.default.PropTypes.func
  }

});

exports.default = StickyStackItem;