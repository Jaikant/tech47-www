import React from 'react'
import styled from '@emotion/styled'
import { BottomLine } from './Common'
import media from '../utils/media';
import BackgroundImage from 'gatsby-background-image'

const Wrapper = styled.div`
  min-height: 100vh;
`

const Background = styled(BackgroundImage)`
  opacity: 0.2;
  background-size: cover;
  border-radius: 5px;
`

const StyledInnerWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.72), 
              rgba(0, 0, 0, 0.72)), 
              linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.01) 100%);
  padding: 16px;
  ${media.tablet`
    padding: 32px;
    grid-template-rows: 1fr 4fr;
  `};
  ${media.desktop`
    padding: 64px;
    grid-template-rows: 1fr 4fr;
  `};  
`;


const QuoteText = styled.div`
  font-size: 24px;
  ${media.tablet`
    font-size: 32px;
  `};
  ${media.desktop`
  font-size: 40px;
  `};
  font-family: Caveat;
  ${media.tablet`
    letter-spacing: 4px;
  `};
  align-text: center;
`

const Quote = props => (
  <Wrapper>
    <Background 
      fluid={props.img} 
      backgroundColor={props.img}
      {...props}>
      <StyledInnerWrapper>
      <img src={props.logo} alt="AlignLogo" />
      <div data-scroll-fade={true}>
        <QuoteText >
          {props.children}
          <br />
          <br />
          {props.author}
          <br />
          {props.location}
        </QuoteText>
      </div>
      </StyledInnerWrapper>
    </Background>
  </Wrapper>
)

export default Quote