import React from 'react'
import styled from 'react-emotion'
import { ArrowButton, BottomLine } from '../components/Common'
import Cloud from '../assets/images/CloudImage.jpg';
import Img from "gatsby-image"

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  align-content: center;
`

const Text = styled.div`
  font-size: 48px;
  line-height: 95.38%;
  color: white;
  background: url(${Cloud});
  background-repeat: no repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
`

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`

const ServicesCareer = (props) => (
    <div>
      <Wrapper>
         <InnerWrapper>
           <div>
            <Text data-scroll-fade={true}>Hire React Developers & teams</Text>
            <ArrowButton text="Get in touch" white />
          </div>
          <Img fluid={props.image1} />
          </InnerWrapper>
        
        <InnerWrapper>
          <div>
            <Text data-scroll-fade={true}>Work for tech47</Text>
            <ArrowButton text="Open positions" white />
          </div>
          <Img fluid={props.image2} />
        </InnerWrapper>
      </Wrapper>
      <BottomLine />
    </div>
  )  

export default ServicesCareer;
