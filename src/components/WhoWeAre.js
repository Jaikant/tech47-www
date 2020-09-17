import React from 'react';
import styled from '@emotion/styled';
import Cloud from '../assets/images/CloudImage.jpg';
import media from '../utils/media';
import IntersectionObserver from '../components/IntersectionObserver';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 48px;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  ${media.tablet`
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    `};
  align-items: center;
  min-height: 100vh;
`;

const ImageUnderText = styled.div`
  overflow: hidden;
  position: relative;
  &:before {
    content: 'test ';
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: transparent;
    // background: url(${Cloud});
    background: red;
    background-repeat: no repeat;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    will-change: transform;
    z-index: -1;
  }
`;

const LeftTextWrapper = styled.div`
  position: sticky;
  top: 0px;
  padding-bottom: 32px;
  padding-top: 32px;
`;

const LeftText = styled.div`
  align-self: flex-start;
  font-size: 48px;
`;

const RightText = styled.div`
  overflow: hidden;
  position: relative;
  align-self: flex-start;
  font-size: 24px;
  ${media.tablet`
    font-size: 32px;
  `};
  opacity: ${p => p.opacity};
  color: transparent;
  background: url(${Cloud});
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeaderWhoAreWe = () => {
  return (
    <LeftTextWrapper data-scroll-fade={true}>
      <LeftText>Who are we</LeftText>
    </LeftTextWrapper>
  );
};

const WhoWeAre = () => {
  return (
    <Wrapper>
      <HeaderWhoAreWe />
      <div>
        <IntersectionObserver options={{ rootMargin: '-350px 0px 0px 0px' }}>
          {props => {
            const {
              entering,
              exiting,
              isIntersecting,
              visible,
              intersectionRatio,
              visiblePercentage,
              boundingClientRect
            } = props;
            // console.log(
            //   `isIntersecting : ${isIntersecting} exiting : ${exiting} intersectionRatio : ${intersectionRatio}, visiblePercentage: ${visiblePercentage}, boundingClientRect: ${boundingClientRect}`,
            //   JSON.stringify(boundingClientRect)
            // );
            return (
              <RightText
                opacity={props.intersectionRatio}
                exiting={props.exiting}
              >
                You need an agency which understands your business and works as
                your partner?
              </RightText>
            );
          }}
        </IntersectionObserver>
        <br />
        <br />
        <IntersectionObserver options={{ rootMargin: '-290px 0px 0px 0px' }}>
          {props => {
            return (
              <RightText
                opacity={props.intersectionRatio}
                exiting={props.exiting}
              >
                We are a group of developers who have built great products which
                scale.
              </RightText>
            );
          }}
        </IntersectionObserver>
        <IntersectionObserver options={{ rootMargin: '-290px 0px 0px 0px' }}>
          {props => {
            return (
              <RightText
                opacity={props.intersectionRatio}
                exiting={props.exiting}
              >
                Our teams come with a mix of experience to give the perfect
                balance.
              </RightText>
            );
          }}
        </IntersectionObserver>
        <br />
        <br />
        <IntersectionObserver options={{ rootMargin: '-290px 0px 0px 0px' }}>
          {props => {
            return (
              <RightText
                opacity={props.intersectionRatio}
                exiting={props.exiting}
              >
                We love the modern web. We are open source contributors.
              </RightText>
            );
          }}
        </IntersectionObserver>
        <IntersectionObserver options={{ rootMargin: '-290px 0px 0px 0px' }}>
          {props => {
            return (
              <RightText
                opacity={props.intersectionRatio}
                exiting={props.exiting}
              >
                We also run a community of developers to share and spread
                knowledge.
              </RightText>
            );
          }}
        </IntersectionObserver>
        <br />
        <br />
      </div>
    </Wrapper>
  );
};

export default WhoWeAre;
