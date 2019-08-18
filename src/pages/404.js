import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';

class NotFoundPage extends React.Component {
  render() {
    // const { data } = this.props;
    // const siteTitle = data.site.siteMetadata.title;

    return (
      <Fragment>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Fragment>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
