import React from 'react';
import Layout from '../components/Layout';
import Social from '../assets/icons/Community.svg';
import CommunityLanding from '../components/BlogCommunity';
import { ImageGalleryText, ImageWrapper, Wrapper } from '../components/ImageGallery';
import Img from 'gatsby-image';
import { graphql } from "gatsby";

const community = ({data}) => (
    <Layout footer fixedHeight light >
      <CommunityLanding 
        title='Our community initiatives'
        subtitle='Because we are grateful to have recieved so much'
        image={<img src={Social} width="360" height="273" alt="Social" />}
      />
      <Wrapper>
      <ImageGalleryText>
        We sponsor the React Asia Meetup, which has 1000+ members
        </ImageGalleryText>
      <ImageWrapper>
        {data.allFile.edges.map((image) =>
          <Img
            fluid={image.node.childImageSharp.fluid}
          />
        )}
      </ImageWrapper>
    </Wrapper>
    </Layout>
)

export default community

export const query = graphql`
  query {
    allFile(filter: {absolutePath : { regex: "/meetupImages/" }}){
        edges{
          node{
            childImageSharp {
               fluid(maxWidth: 380){
                 ...GatsbyImageSharpFluid
               }
             }
          }
        }
      }
  }
`