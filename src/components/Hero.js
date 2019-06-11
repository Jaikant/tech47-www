import React from 'react'
import ReactLogo from '../assets/icons/ReactLogo.svg'
import styled from 'react-emotion'
import { ArrowButton, BottomLine } from './Common'
import Cloud from '../assets/images/cloud.jpg'

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

const Wrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 17%;
  right: 17%;
`
const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
