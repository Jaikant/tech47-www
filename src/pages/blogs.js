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
 margin-left: 1em;
 padding: 3px 8px 4px 8px;
 border-radius: 8px;
 font-size: 0.7em;
 background-color: blue;
 color: white;
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
      {props.data.allContentfulBlogPost.edges.map((b,i) => <div> 
      <BlogTitle> <span> {i+1}. </span> <Link to={`/blog/${b.node.slug}`}> { b.node.title } </Link>  </BlogTitle>
      {b.node.tags.map(t => <TagBlock> { t } </TagBlock>)} 
      </div>)}
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
        tags
        slug
        createdAt
        updatedAt
      }
    }
  }
  }
`;