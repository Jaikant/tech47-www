import React from 'react'
import styled from 'react-emotion'
import Jai from '../assets/images/jai.jpeg'
import { ArrowButton } from '../components/Common'

const TagButton = styled.button`
    font-size: 24px;
    text-align: center;
    color: #101010;
    background-color: #f0f0f0;
    border-radius: 50px;
    border: none;
    width: 165px;
    height: 48px;
`

const BlogCard = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    border: 1px solid rgba(54, 54, 54, 0.89);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width: 30%;
    padding: 20px;
`

const TagName = styled.div`
    font-size: 18px;
    font-weight: bold;
    line-height: 60px;
    color: #363636;
`

const BlogTitle = styled.div`
font-size: 36px;
font-weight: bold;
line-height: 42px;
text-align: center;
color: #363636;
`

const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const AuthorWrapper = styled.div`
    display: flex;
    align-items: center;
`

const AuthorImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 14px;
`
const AuthorName = styled.text`
    font-size: 18px;
    color: #101010;
`

const BlogLanding = () => (
    <div>
    <TagButton>React</TagButton>
    <br/>
    <br/>
    <BlogCard>
        
        <TagName>SERVERLESS</TagName>
        <BlogTitle>Responsive Images and Resizing</BlogTitle>
        <InnerWrapper>
        <AuthorWrapper>
        <AuthorImage src={Jai} alt="Author image" />
        <AuthorName>Jai</AuthorName>
        </AuthorWrapper>
        <ArrowButton text="See More" />
        </InnerWrapper>

    </BlogCard>
    </div>
)

export default BlogLanding