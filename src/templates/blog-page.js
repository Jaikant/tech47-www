import React from 'react'
import styled from 'react-emotion'
import Layout from '../components/Layout'
import Blog from '../components/Blog'
import { ArrowButton } from '../components/Common'
import { graphql } from 'gatsby'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`

const BlogPage = ({ data }) => (
  <Layout white footer light>
    <Wrapper>
      <ArrowButton text="Go back" />
      <Blog
        title={data.contentfulBlogPost.title}
        description={data.contentfulBlogPost.description.description}
      />
      <ArrowButton text="Go back" />
    </Wrapper>
  </Layout>
)

export default BlogPage

export const contentfulBlogPostQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      description {
        id
        description
      }
    }
  }
`
