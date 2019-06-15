import React from 'react'
import styled from 'react-emotion'
import { BottomLine } from './Common'

const Wrapper = styled.div`
  height: 100vh;
`

const Background = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
    url(${props => props.img});
  background-size: cover;
  padding: 10px;
  margin: 100px 0px 100px 0px;
  display: grid;
  grid-template-rows: 1fr 3fr;
  align-items: center;
`

const QuoteText = styled.div`
  font-size: 48px;
  font-family: Caveat;
  letter-spacing: 5px;
  align-text: center;
`

const Quote = props => (
  <Wrapper>
    <Background {...props}>
      <img src={props.logo} width="130" height="131" alt="AlignLogo" />
      <QuoteText>
        {props.children}
        <br />
        <br />
        {props.author}
      </QuoteText>
    </Background>
    <BottomLine />
  </Wrapper>
)

export default Quote