import React from 'react';

import 'styles/site_base.css';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    };
  },
  render () {
    return (
      <div>
      {this.props.children}
      </div>
    );
  }
});