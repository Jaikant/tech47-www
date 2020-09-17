/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { graphql } from 'gatsby';
import { Box } from '../../components';
import colors from '../../utils/colors';
import Layout from '../../components/Layout';

const Terms = ({ data, location }) => {
  const { markdownRemark: remark } = data;
  return (
    <div>
      <Box bg={colors.primary}>
        <Box css="margin: 2.5em">
          <h1>{remark.frontmatter.title}</h1>
          <div
            css="text-align: left;"
            dangerouslySetInnerHTML={{ __html: remark.html }}
          />
        </Box>
      </Box>
    </div>
  );
};

export const termsQuery = graphql`
  query termsQuery {
    markdownRemark(fileAbsolutePath: { regex: "src/pages/terms/terms.md/" }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Terms;
