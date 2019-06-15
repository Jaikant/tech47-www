import React from 'react'
import styled from 'react-emotion'
import { ArrowButton } from '../components/Common'
import OpenPosition from '../components/OpenPosition'
import openpositions from './positions.js'
import Layout from '../components/Layout'
import { Email } from '../components/Common'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
  align-items: center;
`

const InnerWrapper = styled.div`
  display: grid;
  justify-items: center;
`

const OpenPositions = () => (
  <Layout white>
    <Wrapper>
      <ArrowButton text="Go back" />
      <InnerWrapper>
        {openpositions.map(openposition => (
          <OpenPosition
            position={openposition.position}
            description={openposition.description}
          />
        ))}
      </InnerWrapper>
      <InnerWrapper>
        <Email text="Send us an email" />
      </InnerWrapper>
    </Wrapper>
  </Layout>
)

export default OpenPositions
