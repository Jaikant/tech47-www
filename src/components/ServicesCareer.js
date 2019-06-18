import React from 'react'
import styled from 'react-emotion'
import { ArrowButton, BottomLine } from './Common'
import Career from '../assets/images/Career.jpg'
import TextImage from '../assets/images/TextImage.jpg'
import Cloud from '../assets/images/CloudImage.jpg';

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  align-content: center;
`

const Upper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Career});
  -webkit-filter: grayscale(100%); 
  background-size: 100% 100%;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
`

const UpperLeft = styled.div`
  background: black;
  padding: 20px;
`

const LowerText = styled.div`
  font-size: 48px;
  line-height: 95.38%;
  color: white;
  background: url(${Cloud});
  background-repeat: no repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
`

const UpperText = styled(LowerText)`
  width: 50%;
`

const Lower = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`

const ServicesCareer = () => (
  <div>
    <Wrapper>
      <Upper>
        <UpperLeft>
          <UpperText>Hire React Developers & teams</UpperText>
          <ArrowButton text="Get in touch" white />
        </UpperLeft>
        <div />
      </Upper>
      <Lower>
        <div>
          <LowerText>Work for tech47</LowerText>
          <ArrowButton text="Open positions" white />
        </div>
        <img src={TextImage} width="622px" height="284px" alt="TextImage" />
      </Lower>
    </Wrapper>
    <BottomLine />
  </div>
)

export default ServicesCareer;