import React from 'react';
import ReactDOM from 'react-dom';

const StickyStackItem = React.createClass({

  propTypes: {
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
    const {offsetTop, offsetHeight} = ReactDOM.findDOMNode(this);

    register(position, offsetTop, offsetHeight);

    this.setState({
      height: offsetHeight,
    });
  },

  render() {
    const {getStyle} = this.context;
    const {children, position} = this.props;
    const {height} = this.state;

    return (
      <div style={{height}}>
        <div style={getStyle(position)}>
          {children}
        </div>
      </div>
    );
  },

});

export default StickyStackItem;
