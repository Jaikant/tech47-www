import React from 'react'
import styled from 'react-emotion'
import { ArrowButton, BottomLine } from './Common'
import Career from '../assets/images/Career.png'
import TextImage from '../assets/images/TextImage.jpg'
import Cloud from '../assets/images/Cloud.jpg'

const Text = styled.div`
  font-size: 48px;
  width: 376px;
`

const ImageUnderText = styled(Text)`
  color: white;
  background: url(${Cloud});
  background-repeat: no repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const InnerWrapper = styled.div`
  background-image: url(${Career});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`

const SecondWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`

const ServicesCareer = () => (
  <div>
    <InnerWrapper>
      <ImageUnderText>Hire React Developers & teams</ImageUnderText>
      <ArrowButton text="Get in touch" white />
    </InnerWrapper>
    <SecondWrapper>
      <div>
        <Text>Work for tech47</Text>
        <ArrowButton text="Open positions" white />
      </div>
      <img src={TextImage} width="622px" height="284px" alt="TextImage" />
    </SecondWrapper>
    <BottomLine />
  </div>
)

export default ServicesCareer
