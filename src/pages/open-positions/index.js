/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { css } from 'react-emotion';
import { graphql } from "gatsby";
import { Header, Box } from '../../components';
import colors from '../../utils/colors';
import Layout, { NewLayout } from '../../layouts';
import BigCard from '../../components/BigCard';

const blogTheme = css`
  max-width: 900px;
  margin: 4.5rem auto 4.5rem auto;
  p {
    color: ${colors.sixth};
  }
  a {
    color: ${colors.primary};
  }
`;



const OpenPositions = ({ data, location }) => {
  const { markdownRemark: remark } = data;
  return (
    <Layout location={location}>
      <Header/>
      <div css={`
        display: grid;
        -ms-transform: translate(0px, -16vh);
        -webkit-transform: translate(0px, -16vh);
        transform: translate(0px, -16vh);
        `}
      >
        <div css={`
                justify-self: center;
                max-width: 732px;
              `}
        >

      <BigCard>
        <div className={blogTheme}>
          <Box css="margin: auto 16px auto 16px;">
            <h1>{remark.frontmatter.title}</h1>
            <div
              css="text-align: left; a { color : #02a9f7;}"
              dangerouslySetInnerHTML={{ __html: remark.html }}
            />
          </Box>
        </div>
      </BigCard>
      </div>
        </div> 


    </Layout>
  );
};

export const positionsQuery = graphql`
  query positionsQuery {
    markdownRemark(
      fileAbsolutePath: { regex: "src/pages/open-positions/positions.md/" }
    ) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default OpenPositions;
