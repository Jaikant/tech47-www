import React from 'react';
import { Global, css } from '@emotion/core';
import colors from '../utils/colors';

export default ({ element }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            font-weight: 400;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
          }
          body {
            background-color: ${colors.darkTheme.primary};
            color: ${colors.darkTheme.secondary};
          }
          a {
            text-decoration: none;
            color: inherit;
          }
          a:hover {
            cursor: pointer;
            text-decoration: none;
            color: ${colors.gray.calm};
            transition: color 0.15s ease-in;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            color: ${colors.darkTheme.secondary};
          }
        `}
      />
      {element}
    </>
  );
};
