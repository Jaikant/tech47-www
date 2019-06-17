import React from 'react';
import styled from 'react-emotion';
import { BottomLine } from './Common';
import Cloud from '../assets/images/CloudImage.jpg';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 4fr;
    grid-gap: 50px;
    align-items: center;
    height: 100vh;
`

const ImageUnderText = styled.div`
    color: white;
    background: url(${Cloud});
    background-repeat: no repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const LeftText = styled(ImageUnderText)`
    font-size: 48px;
`

const RightText = styled(ImageUnderText)`
    font-size: 36px;
`

const WhoWeAre = () => (
    <div>
        <Wrapper>
            <LeftText>Who are we</LeftText>
            <RightText> You need an agency which understands your business and works as your partner?<br /><br /> We are a group of developers who have built great products which scale. Our teams come with a mix of experience to give the perfect balance.<br /><br /> We love the modern web. We are open source contributors. We also run a community of developers to share and spread knowledge.</RightText>
        </Wrapper>
        <BottomLine />
    </div>
)

export default WhoWeAre;
