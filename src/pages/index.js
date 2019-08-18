import React from 'react';
import { graphql } from 'gatsby';

import TransitionLink from 'gatsby-plugin-transition-link';
import { TweenMax } from 'gsap/all';

import Bio from '../components/bio';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

import { usePage } from '../context/PageContext';
import PageWrapper from '../context/PageWrapper';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  const { setPanelData } = usePage();

  const entering = ({ node, entry: { delay } }) => {
    return new TweenMax.fromTo(
      node,
      0.6,
      {
        x: '-100%',
        delay,
      },
      {
        x: '0%',
      }
    );
  };

  const handleMouseOver = node => {
    setPanelData({
      state: 'peeking',
      colors: node.frontmatter.colors,
    });
  };

  const handleMouseOut = node => {
    setPanelData({
      state: 'default',
      colors: node.frontmatter.colors,
    });
  };

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;

        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <TransitionLink
                  to={node.fields.slug}
                  onMouseOver={() => handleMouseOver(node)}
                  onMouseOut={() => handleMouseOut(node)}
                  exit={{
                    length: 1.2,
                  }}
                  entry={{
                    delay: 0.5,
                    trigger: entering,
                  }}
                >
                  {title}
                </TransitionLink>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
    </Layout>
  );
};

const WrappedBlogIndex = props => (
  <PageWrapper>
    <BlogIndex {...props} />
  </PageWrapper>
);

export default WrappedBlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            colors
          }
        }
      }
    }
  }
`;
