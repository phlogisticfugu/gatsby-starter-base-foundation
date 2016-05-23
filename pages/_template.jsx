import React from 'react';
import DocumentTitle from 'react-document-title';
import { config } from 'config';

import 'styles/site_base.scss';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    };
  },
  render () {
    const title = this.props.title || config.siteTitle;
    
    return (
      <DocumentTitle title={title}>
      {this.props.children}
      </DocumentTitle>
    );
  }
});