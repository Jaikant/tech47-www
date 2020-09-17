/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import typography from '../utils/typography';
import Layout from '../components/Layout';

const { rhythm } = typography;

export default ({ location }) => (
  <div>
    <div
      css={css`
        height: 100%;
        margin-left: ${rhythm(1)};
        margin-top: ${rhythm(6)};
      `}
    >
      <h1>Page not found</h1>
    </div>
  </div>
);
