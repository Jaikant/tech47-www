import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import styled from 'react-emotion';

const Wrapper = styled.div`
background: black;
min-height: 100vh;
`

const Landing = () => (
   <Wrapper>
      <NavBar />
      <Hero />
   </Wrapper>
)

export default Landing;