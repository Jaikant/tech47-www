/* eslint-disable */
import React from 'react';
import Link from 'gatsby-link';
import { Header, Box, Flex, Tags, BlogPosts, SideBar } from '../components';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { MainDiv } from '../components/Layout';
import colors from '../utils/colors';
import Helmet from '../components/helmet';

const blogTheme = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.secondary};
  }
  p {
    color: ${colors.sixth};
  }
`;

const ContentfulBlogIndex = ({ data, location, pageContext }) => {
  //  const { edges: posts } = data.allMarkdownRemark;
  // The below objects are coming from gatsby-paginate
  const { group, index, first, last, pathPrefix } = pageContext;
  const previousUrl =
    index - 1 == 1
      ? '/' + pathPrefix
      : pathPrefix + '/' + (index - 1).toString();

  const nextUrl = pathPrefix + '/' + (index + 1).toString();
  return (
    <MainDiv location={location}>
      <Header />
      <div className={blogTheme}>
        <Helmet
          title={'Tech47 - Technology to power your startup'}
          description={'We build modern websites, apps & progressive web apps'}
          image={data.imageOne ? data.imageOne.resize.src : null}
          pathname={location.pathname}
        />
      </div>
      <Flex css="max-width: 1024px; margin: 0 auto; align-content: center;">
        <BlogPosts
          group={group}
          first={first}
          last={last}
          previousUrl={previousUrl}
          nextUrl={nextUrl}
          pathPrefix={pathPrefix}
        />
        {/* <SideBar group={group} first={first} last={last} previousUrl={previousUrl} nextUrl={nextUrl}/> */}
      </Flex>
    </MainDiv>
  );
};

export const contentfulQuery = graphql`
  query ContentfulQuery {
    imageOne: imageSharp(fluid: { originalName: { regex: "/cover/" } }) {
      resize(width: 1200, height: 630, cropFocus: CENTER) {
        # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
        src
      }
    }
  }
`;
/* eslint-enable */

export default ContentfulBlogIndex;
