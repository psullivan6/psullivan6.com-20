import React, { Fragment } from 'react';
import { Link } from 'gatsby';

// Components
import Transition from '../Transition';
import GlobalStyle from '../../styles/global';

// Utilities
import { rhythm } from '../../utils/typography';

class Layout extends React.Component {
  render() {
    const { location, children } = this.props;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const isHomepage = location.pathname === `${__PATH_PREFIX__}/`;

    const headerStyles = isHomepage
      ? {
          marginTop: 0,
          marginBottom: rhythm(1.5),
          fontFamily: `Montserrat, sans-serif`,
          color: 'rebeccapurple',
        }
      : {
          marginTop: 0,
          marginBottom: rhythm(1.5),
          fontFamily: `Montserrat, sans-serif`,
        };

    return (
      <Fragment>
        <GlobalStyle />
        <Transition location={location} isHomepage={isHomepage}>
          <header
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} 0`,
            }}
          >
            <h3 style={headerStyles}>
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/`}
              >
                {siteTitle}
              </Link>
            </h3>
          </header>
          {children}
          <footer
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} 0`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Transition>
      </Fragment>
    );
  }
}

export default Layout;
