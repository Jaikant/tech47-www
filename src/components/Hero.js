import React from 'react'
import ReactLogo from '../assets/icons/ReactLogo.svg'
import styled from 'react-emotion'
import { ArrowButton, BottomLine } from './Common'
import Cloud from '../assets/images/CloudImage.jpg'

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
`

const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
`

const HeroText = styled.div`
  font-size: 96px;
  line-height: 107.38%;
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
        <HeroText>We Build React Web Apps</HeroText>
        <HeroSubText>Because we love to.</HeroSubText>
        <ArrowButton text="Get in touch" white />
      </div>
      <img src={ReactLogo} width="268" height="563" alt="ReactLogo" />
    </HeroWrapper>
    <BottomLine />
  </Wrapper>
)

export default Hero
