import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Layout, { MainDiv } from '../components/Layout';
import NavBar from '../components/NavBar';
import BlogLanding from '../components/BlogCommunity';
import media from '../utils/media';
import { Header } from '../components/index';
import ContentfulBlogIndex from '../templates/blogcontentful';

const BlogDiv = styled.div`
  margin-bottom: 16px;
`;
const BlogTitle = styled.h2`
  color: #0366d6;
  display: inline-block;
  a {
    color: #0366d6;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const TagBlock = styled.span`
  margin-right: 1em;
  margin-left: 1em;
  padding: 3px 8px 4px 8px;
  border-radius: 8px;
  font-size: 0.6rem;
  background-color: blue;
  color: white;
`;

const blogs = props => (
  <MainDiv fixedHeight white>
    {props.data.allContentfulBlogPost.edges.map((b, i) => (
      <BlogDiv>
        <BlogTitle>
          {' '}
          <Link to={`/blog/${b.node.slug}`}> {b.node.title} </Link>
          {b.node.tags.map(t => (
            <TagBlock> {t} </TagBlock>
          ))}
        </BlogTitle>
        <div>
          {' '}
          <hr />{' '}
        </div>
      </BlogDiv>
    ))}
  </MainDiv>
);

export default blogs;

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          tags
          slug
          createdAt
          updatedAt
        }
      }
    }
  }
`;
