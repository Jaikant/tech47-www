import React from 'react';
import styled, { css } from 'react-emotion';
import Typist from 'react-typist';
import FaHeart from 'react-icons/lib/fa/heart';
import colors from '../../utils/colors';
import techlogos from './logos';
import tags from './tags';
import servicecard from './servicecard';
import blogposts from './blogposts';
import mainpost from './mainpost';
import sidebar from './sidebar';
import emailcapturehomepage from './email-capture-home';

export const Box = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  margin: 3.5rem auto 3.5rem auto;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


const bgColor = css`
  width: 100%;
	height: 50vh;
  background-image: linear-gradient(-225deg, #65379B 0%, #886AEA 53%, #6457C6 100%);
`;

const cursor = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 1000,
}

export const Header = () => (
  <div className={bgColor}>
    <div css={`
        padding-top: 17vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        color: white;
        font-size: 1.2em;
      `}>
      <div css={`
            padding: 0px 32px;
        `}>
        <Typist cursor={cursor}>
          <span> We love to build technology </span>
          {/* <Typist.Backspace count={58} delay={1000} /> */}
          {/* <span> We </span> */}
          <FaHeart
            css={css({
              cursor: `pointer`,
              fontSize: `1em`,
              color: `${colors.tech47pink}`,
              userSelect: `none`,
            })}
          />
          {' '}
          {/* startups. */}
        </Typist>
      </div>
    </div>
  </div>
)


export const Tags = tags;
export const Logos = techlogos;
export const ServiceCard = servicecard;
export const BlogPosts = blogposts;
export const SideBar = sidebar;
export const EmailCaptureHomePage = emailcapturehomepage;
export const MainPost = mainpost;
