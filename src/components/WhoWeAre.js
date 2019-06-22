import React, { useEffect, useRef } from 'react'
import styled from 'react-emotion'
import Cloud from '../assets/images/CloudImage.jpg'
import media from '../utils/media'
import IntersectionObserver from '../components/IntersectionObserver'
import { useSpring, animated } from 'react-spring'
import throttle from 'lodash/throttle';
import getWindowDimensions from '../utils/getWindowDimensions';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  ${media.tablet`
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    `};
  grid-gap: 48px;
  align-items: center;
  min-height: 100vh;
`

const ImageUnderText = styled.div`
  color: white;
  background: url(${Cloud});
  background-repeat: no repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const LeftTextWrapper = styled.div`
  position: sticky;
  top: 0px;
  padding-bottom: 128px;
`

const LeftText = styled.div`
  align-self: flex-start;
  font-size: 48px;
`

const RightText = styled(ImageUnderText)`
  align-self: flex-start;
  font-size: 32px;
  opacity: ${p => p.opacity};
`

const calcTransform = (offset) => `translateY(${offset * 180}px)`;

const HeaderWhoAreWe = () => {
  const config = { mass: 2, tension: 300, friction: 120 }

  const [args, set] = useSpring(() => ({
    offset: 1,
    config,
  }))

  const animatedStyles = {
    transform: args.offset.interpolate(calcTransform),
    position: 'relative',
    zIndex: 2,
    pointerEvents: 'none',
  }

  const heading = useRef();

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (heading.current) {
        const { height } = getWindowDimensions()
        const offset = heading.current.getBoundingClientRect().top
        set({ offset: 1 - offset / height })
      }
    })

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <LeftTextWrapper data-scroll-fade={true} innerRef={heading}>
          <animated.div style={animatedStyles}>

      <LeftText>Who are we</LeftText>
      </animated.div>

    </LeftTextWrapper>
  )
}

const WhoWeAre = () => {
  return (
    <div>
      <Wrapper>
        <HeaderWhoAreWe />
        <div>
          <IntersectionObserver options={{rootMargin : '-350px 0px 0px 0px'}}>
            {props => {
                const {entering, exiting, isIntersecting, visible, intersectionRatio, visiblePercentage, boundingClientRect} = props;
                // console.log(`isIntersecting : ${isIntersecting} exiting : ${exiting} intersectionRatio : ${intersectionRatio}, visiblePercentage: ${visiblePercentage}, boundingClientRect: ${boundingClientRect}`, JSON.stringify(boundingClientRect));
              return (
                  <RightText opacity={props.intersectionRatio} exiting={props.exiting}>
                    You need an agency which understands your business and works
                    as your partner?
                  </RightText>
              )
            }}
          </IntersectionObserver>
          <br />
          <br />
          <IntersectionObserver options={{rootMargin : '-290px 0px 0px 0px'}}>
            {props => {
              return (
                  <RightText opacity={props.intersectionRatio} exiting={props.exiting}>
                    We are a group of developers who have built great products
                    which scale. 
                  </RightText>
              )
            }}
          </IntersectionObserver>          
          <IntersectionObserver options={{rootMargin : '-290px 0px 0px 0px'}}>
            {props => {
              return (
                  <RightText opacity={props.intersectionRatio} exiting={props.exiting}>
                    Our teams come with a mix of experience to give
                    the perfect balance.
                  </RightText>
              )
            }}
          </IntersectionObserver>
          <br />
          <br />
          <IntersectionObserver options={{rootMargin : '-290px 0px 0px 0px'}}>
            {props => {
              return (
                  <RightText opacity={props.intersectionRatio} exiting={props.exiting}>
                    We love the modern web. We are open source contributors. 
                  </RightText>
              )
            }}
          </IntersectionObserver>
          <IntersectionObserver options={{rootMargin : '-290px 0px 0px 0px'}}>
            {props => {
              return (
                  <RightText opacity={props.intersectionRatio} exiting={props.exiting}>
                    We also run a community of developers to share and spread
                    knowledge.
                  </RightText>
              )
            }}
          </IntersectionObserver>
          <br />
          <br />
        </div>
      </Wrapper>
    </div>
  )
}

export default WhoWeAre
