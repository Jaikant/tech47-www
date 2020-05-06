import React from 'react'
import styled from 'react-emotion'
import media from '../utils/media'
import BlogContent from './BlogContent';


const Wrapper = styled.div`
  ${media.desktop`
    max-width: 980px;
  `};
`

const Title = styled.div`
  font-size: 2em;
  margin-bottom: 24px;
  ${media.tablet`
    font-size: 3em;
  `}
  color: #101010;
  font-weight: bold;
`

const Description = styled.div`
  font-size: 1.5em;
  font-style: italic;
  color: #101010;
  margin-bottom: 16px;
`

//BlogContent has styling like github markdown. To acitivate code styling in prism, uncomment
//prism in gatsby.browser.js:

const Blog = (props) => (
  <Wrapper>
    <Title> {props.title} </Title>
    <Description> {props.description} </Description>
     <BlogContent dangerouslySetInnerHTML={{__html: props.html}}/>
  </Wrapper>
)

export default Blog
