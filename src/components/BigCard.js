/* eslint-disable */
import React from 'react';
import colors from '../utils/colors';
import styled from '@emotion/styled';
import media from '../utils/media';

const Card = styled.div`
  background-color: ${colors.tech47white};
  position: relative;
  max-width: 716px;
  height: auto;
  margin: 16px;
  ${media.tablet`
    margin: 8px 16px 8px 16px;
  `};
  ${media.desktop`
    margin: 8px 16px 8px 0px;
  `};
  overflow: hidden;
  text-align: left;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(226, 226, 226, 1);
  -moz-box-shadow: 2px 2px 5px 0px rgba(226, 226, 226, 1);
  box-shadow: 2px 2px 5px 0px rgba(226, 226, 226, 1);

  img,
  h4 {
    margin: auto;
  }
`;

const BigCard = props => {
  return (
    <div>
      <div
        css={`
          display: flex;
          flex-wrap: wrap;
          max-width: 732px;
        `}
      >
        <Card>{props.children}</Card>
      </div>
    </div>
  );
};

export default BigCard;
