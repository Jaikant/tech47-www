import React from 'react'
import styled from 'react-emotion'
import Layout from '../components/Layout'
import Blog from '../components/Blog'
import { ArrowButton } from '../components/Common'
import { graphql } from 'gatsby'


const BlogPage = ({ data }) => (
  <Layout white>
      {/* <ArrowButton text="Go back" /> */}
      <Blog
        title={data.contentfulBlogPost.title}
        description={data.contentfulBlogPost.description.description}
        html={data.contentfulBlogPost.blog.childMarkdownRemark.html}
      />
      <div style={{margin: "16px"}} />
      <ArrowButton text="Go back" />
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
      blog {
        childMarkdownRemark {
          id
          html
        }
      }
    }
  }
`
