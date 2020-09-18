import React from 'react';
import styled from '@emotion/styled';
import { MainDiv } from '../components/Layout';
import SEO from '../components/SEO';
import Blog from '../components/Blog';
import { ArrowButton } from '../components/Common';
import { graphql, navigate } from 'gatsby';

const BlogPage = ({ data }) => (
  <MainDiv white>
    <SEO
      title={data.contentfulBlogPost.title}
      description={data.contentfulBlogPost.description.description}
    />
    <Blog
      title={data.contentfulBlogPost.title}
      description={data.contentfulBlogPost.description.description}
      html={data.contentfulBlogPost.blog.childMarkdownRemark.html}
    />
    <div style={{ marginBottom: '64px' }} />
    <div onClick={() => navigate('/blogs')}>
      <ArrowButton text="Go back" />
    </div>
  </MainDiv>
);

export default BlogPage;

export const contentfulBlogPostQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      description {
        id
        description
      }
      blog {
        childMarkdownRemark {
          id
          html
        }
      }
    }
  }
`;
