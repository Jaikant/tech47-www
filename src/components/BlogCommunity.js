import React from 'react'
import styled from 'react-emotion'
import colors from '../utils/colors'
import { BottomLine } from './Common'
import media from '../utils/media'
import Typist from 'react-typist'

const Wrapper = styled.div`
  display: grid;
`

const SubWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  ${media.tablet`
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr;
    `};
  align-items: center;
  justify-items: center;
`

const Title = styled.text`
  font-size: 40px;
  ${media.tablet`
     font-size: 60px;
    `};
  color: ${colors.tech47white};
`

//The height of 1px below, prevents the screen from filckering!
const Subtitle = styled.text`
  font-size: 26px;
  height: 1px;
  ${media.tablet`
     font-size: 34px;
    `};
  color: ${colors.darkTheme.primaryLight};
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
`

const cursor = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 1000,
}

const CommunityLanding = props => (
  <Wrapper>
    <SubWrapper>
      <Text>
        <Title>{props.title}</Title>
        <Subtitle>
          <Typist cursor={cursor}>{props.subtitle}</Typist>
        </Subtitle>
      </Text>
      {props.image}
    </SubWrapper>
    <BottomLine />
  </Wrapper>
)

export default CommunityLanding
