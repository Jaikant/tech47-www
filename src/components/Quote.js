import React from 'react'
import styled from 'react-emotion'
import { BottomLine } from './Common'

const Background = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
    url(${props => props.img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 10px;
`

const QuoteText = styled.div`
  font-size: 48px;
  font-family: Caveat;
  letter-spacing: 5px;
  line-height: 120%;
`

const Quote = props => (
  <div>
    <Background {...props}>
      <img src={props.logo} width="130" height="131" alt="AlignLogo" />
      <QuoteText>
        {props.children} <br />
        <br />
        {props.author}
      </QuoteText>
    </Background>
    <BottomLine />
  </div>
)

export default Quote
