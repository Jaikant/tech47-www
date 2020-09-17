/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import colors from '../utils/colors';
import typography from '../utils/typography';
import { MainDiv } from '../components/Layout';

const { rhythm } = typography;

export default ({ location }) => (
  <MainDiv location={location}>
    <div
      css={css`
        height: 100%;
        margin-left: ${rhythm(1)};
        margin-top: ${rhythm(6)};
      `}
    >
      <h4 style={{ color: `${colors.gray.calm}` }}> There was a problem! </h4>
      <br />
      <h4 style={{ color: `${colors.gray.copy}` }}>
        {' '}
        Could you email us at jai@tech47.in{' '}
      </h4>
    </div>
  </MainDiv>
);
