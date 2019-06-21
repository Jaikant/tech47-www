import React from 'react';
import styled from 'react-emotion'
import Layout from '../components/Layout';
import Blog from '../assets/icons/Blogs.svg';
import BlogLanding from '../components/BlogCommunity';
import Jai from '../assets/images/jai.jpeg'
import { ArrowButton } from '../components/Common'

const TagButton = styled.button`
    font-size: 20px;
    text-align: center;
    color: #101010;
    background-color: #f0f0f0;
    border-radius: 50px;
    border: none;
    width: 165px;
    height: 48px;
    text-transform: capitalize;
    margin-right: 23px;
`

const BlogCard = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    border: 1px solid rgba(54, 54, 54, 0.89);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    //width: 30%;
    padding: 20px;
    
`

const TagName = styled.div`
    font-size: 18px;
    font-weight: bold;
    line-height: 60px;
    color: #363636;
`

const BlogTitle = styled.div`
font-size: 36px;
font-weight: bold;
line-height: 42px;
text-align: center;
color: #363636;
`

const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const AuthorWrapper = styled.div`
    display: flex;
    align-items: center;
`

const AuthorImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 14px;
`
const AuthorName = styled.text`
    font-size: 18px;
    color: #101010;
`


const blogs = ({ data }) => {
    console.log("data", data);
    return (
        <Layout footer fixedHeight light>
            <BlogLanding
                title='Our views on technology.'
                subtitle='Because we all have to make informed decisions.'
                image={<img src={Blog} width="360" height="273.5" alt="Social" />}
            />
            <div style={{ display: 'grid', gridTemplateRows: '1fr 6fr 1fr' }}>
            <div>
                {data.allContentfulBlogPost.edges.map(({ node }) =>
                    <TagButton>{node.tags}</TagButton>
                )}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '23px' }}>
                    {data.allContentfulBlogPost.edges.map(({ node }) =>
                        <BlogCard>
                            <TagName>{node.tags}</TagName>
                            <BlogTitle>{node.title}</BlogTitle>
                            <InnerWrapper>
                                <AuthorWrapper>
                                    <AuthorImage src={Jai} alt="Author image" />
                                    <AuthorName>{node.author.name}</AuthorName>
                                </AuthorWrapper>
                                <ArrowButton text="See More" />
                            </InnerWrapper>
                        </BlogCard>

                    )}
                </div>
            </div>
        </Layout>
    )
}

export default blogs

export const query = graphql`
    query {
        allContentfulBlogPost{
          edges{
            node{
              title
              tags
              author{
                name
                profilePicture{
                  fixed{
                    src
                  }
                }
              }
            }
          }
        }
      }
`
