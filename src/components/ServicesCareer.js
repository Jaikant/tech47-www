import React, { useRef, useEffect } from 'react';
import throttle from 'lodash/throttle';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ArrowButton, BottomLine } from '../components/Common';
import { useSpring, animated } from 'react-spring';
import { HeroText, ContentInset } from '../components/Common';
import Cloud from '../assets/images/CloudImage.jpg';
import Img from 'gatsby-image';
import getWindowDimensions from '../utils/getWindowDimensions';
import media from '../utils/media';

const Wrapper = styled.div`
  min-height: calc(100vh - 32px);
  ${media.tablet`
    min-height: calc(100vh - 64px);
  `};
  ${media.desktop`
    min-height: calc(100vh - 128px);
  `};

  display: grid;
  align-content: center;
`;

const Text = styled.div`
  font-size: 48px;
  line-height: 95.38%;
  color: white;
  background: url(${Cloud});
  background-repeat: no repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  ${media.tablet`
    grid-template-columns: 1fr 2fr;
  `};
  ${media.desktop`
    grid-template-columns: 1fr 2fr;
  `};
  align-items: center;
`;

const calcTransform = offset => `translateY(${offset * 180}px)`;

const ServicesCareer = props => {
  const config = { mass: 2, tension: 300, friction: 120 };

  const [args, set] = useSpring(() => ({
    offset: 1,
    config
  }));

  const animatedStyles = {
    transform: args.offset.interpolate(calcTransform),
    position: 'relative',
    zIndex: 2,
    pointerEvents: 'none'
  };

  const heading = useRef();

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (heading.current) {
        const { height } = getWindowDimensions();
        const offset = heading.current.getBoundingClientRect().top;
        set({ offset: 1 - offset / height });
      }
    });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <animated.div style={animatedStyles}>
        <ContentInset paddingTop="128px" paddingBottom="128px">
          <HeroText data-scroll-fade={true} innerRef={heading}>
            Tech47 can architect and build your technology stack remotely.{' '}
          </HeroText>
        </ContentInset>
      </animated.div>
      <div style={{ padding: '32px' }} />
      <Wrapper>
        <InnerWrapper>
          <div>
            <Text data-scroll-fade={true}>Hire React Developers & teams</Text>
            <Link to="/hire-us">
              <ArrowButton text="Get in touch" white />
            </Link>
          </div>
          <div data-scroll-fade={true}>
            <Img fluid={props.image1} style={{ opacity: '0.3' }} />
          </div>
        </InnerWrapper>
        <div style={{ padding: '16px' }} />
        <InnerWrapper>
          <div>
            <Text data-scroll-fade={true}>Work for tech47</Text>
            <Link to="/open-positions">
              <ArrowButton text="Open positions" white />
            </Link>
          </div>
          <div data-scroll-fade={true}>
            <Img fluid={props.image2} />
          </div>
        </InnerWrapper>
      </Wrapper>
      <BottomLine />
    </>
  );
};

export default ServicesCareer;
