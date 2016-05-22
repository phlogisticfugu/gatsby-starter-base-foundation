import React from 'react';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';

const BUILD_TIME = new Date().getTime();

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render () {
    const lang = this.props.lang || 'en-us';
    const title = this.props.title || DocumentTitle.rewind();
    let prod_css;
    if (process.env.NODE_ENV === 'production') {
      prod_css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./styles/site_base.css') }} />
    }
    
    return (
      <html lang="{lang}">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />
          <title>{title}</title>
          <script dangerouslySetInnerHTML={{ __html: require('!raw!foundation-sites/dist/foundation.min.css')}} />
          {prod_css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
          <script dangerouslySetInnerHTML={{ __html: require('!raw!jquery/dist/jquery.min.js') }} />
          <script dangerouslySetInnerHTML={{ __html: require('!raw!foundation-sites/dist/foundation.min.js') }} />
        </body>
      </html>
    );
  }
});
