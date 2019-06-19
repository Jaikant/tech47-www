import React, { useEffect, useRef } from 'react'
import ReactLogo from '../assets/icons/ReactLogo.svg'
import styled from 'react-emotion'
import { ArrowButton, BottomLine } from './Common'
import Cloud from '../assets/images/CloudImage.jpg'

const Wrapper = styled.div`
  display: grid;
  height: calc(100vh - 128px);
`

const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`

const Center = styled.div`
  justify-self: center;
`;

const HeroText = styled.div`
  font-size: 96px;
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
        <HeroSubText>Because we love to.</HeroSubText>
        <ArrowButton text="Get in touch" white />
      </div>
      <Center>
        <img src={ReactLogo} width="268" height="563" alt="ReactLogo" />
      </Center>
    </HeroWrapper>
    <BottomLine />
  </Wrapper>
)

export default Hero
