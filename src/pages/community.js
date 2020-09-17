import React from 'react';
import Layout, { MainDiv } from '../components/Layout';
import Social from '../assets/icons/Community.svg';
import CommunityLanding from '../components/BlogCommunity';
import {
  ImageGalleryText,
  ImageWrapper,
  Wrapper
} from '../components/ImageGallery';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const community = ({ data }) => (
  <div>
    <MainDiv fixedHeight light>
      <CommunityLanding
        title="Our community initiatives"
        subtitle="Because we are grateful to have recieved so much"
        image={<img src={Social} width="360" height="273" alt="Social" />}
      />
    </MainDiv>

    <Wrapper>
      <ImageGalleryText>
        Some pictures from the react asia meetups organized by us.
      </ImageGalleryText>
      <ImageWrapper>
        {data.allFile.edges.map(image => (
          <Img fluid={image.node.childImageSharp.fluid} />
        ))}
      </ImageWrapper>
    </Wrapper>
  </div>
);

export default community;

export const query = graphql`
  query {
    allFile(filter: { absolutePath: { regex: "/meetupImages/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 380) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
