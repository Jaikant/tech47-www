import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import Layout, { MainDiv } from '../components/Layout';
import Blog from '../assets/icons/Blogs.svg';
import BlogLanding from '../components/BlogCommunity';
import { Header } from '../components/index'
import ContentfulBlogIndex from '../templates/blogcontentful';


const BlogTitle = styled.h2`
color: #0366d6;
a {
    color: #0366d6;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
`;

const blogs = (props) => (
  <div>
    <Layout fixedHeight>
      <BlogLanding
        title='Our views on technology.'
        subtitle='So you can make informed decisions.'
        image={<img src={Blog} width="360" height="273.5" alt="Social" />}
      />
    </Layout>
    <MainDiv fixedHeight white>
      {props.data.allContentfulBlogPost.edges.map((b,i) => <> 
      <BlogTitle> {i+1}. <Link to={`/blog/${b.node.slug}`}> { b.node.title } </Link>  </BlogTitle>
      </>)}
    </MainDiv>
  </div>
)

export default blogs

export const query = graphql`
  query {
    allContentfulBlogPost {
    edges {
      node {
        id
        title
        slug
        createdAt
        updatedAt
      }
    }
  }
  }
`;