import React from 'react'
import styled from 'react-emotion'

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
`

const Title = styled.div`
  font-size: 64px;
  line-height: 75px;
  color: #101010;
  font-weight: bold;
  margin-bottom: 20px;
`

const Content = styled.div`
  font-size: 24px;
  line-height: 36px;
  color: #101010;
`

const Blog = (props) => (
  <Wrapper>
    <Title>{props.title}</Title>
    <Content>{props.description}</Content>
  </Wrapper>
)

export default Blog
