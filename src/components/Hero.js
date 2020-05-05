import React, { useEffect, useRef } from 'react'
import  ReactLogo from '../assets/icons/ReactLogo.svg'
import styled from 'react-emotion'
import { Link } from 'gatsby'
import { ArrowButton, BottomLine } from './Common'
import Cloud from '../assets/images/CloudImage.jpg'
import media from '../utils/media';

const Wrapper = styled.div`
  display: grid;
  min-height: calc(100vh - 32px);
  ${media.tablet`
    min-height: calc(100vh - 64px);
  `};
  ${media.desktop`
    min-height: calc(100vh - 128px);
  `};
`

const HeroWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  ${media.desktop`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  `};
  align-items: center;
`

const Center = styled.div`
  justify-self: center;
`;

const HeroText = styled.div`
  font-size: 64px;
  ${media.tablet`
    font-size: 96px;
  `};
  line-height: 110%;
  color: white;
  background: url(${Cloud});
  background-repeat: no repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const HeroSubText = styled.div`
  font-size: 36px;
  color: #363636;
  line-height: 64px;
`

const Hero = () => (
  <Wrapper>
    <HeroWrapper>
      <div>
        <HeroText data-scroll-fade={true}>We Build React Web Apps</HeroText>
        <HeroSubText data-scroll-fade={true}>Because we love to.</HeroSubText>
        <Link to='/hire-us'>
         <ArrowButton data-scroll-fade={true} text="Get in touch" white />
        </Link>
      </div>
      <Center>
        <img data-scroll-fade={true} src={ReactLogo} width="268" height="563" alt="ReactLogo" />
      </Center>
    </HeroWrapper>
    <BottomLine />
  </Wrapper>
)

export default Hero
