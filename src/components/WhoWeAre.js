import React from 'react';
import styled from 'react-emotion';
import { BottomLine } from './Common';
import Cloud from '../assets/images/CloudImage.jpg';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 4fr;
    grid-gap: 48px;
    align-items: center;
    padding-top: 128px;
    height: calc(100vh - 128px);
`

const ImageUnderText = styled.div`
    color: white;
    background: url(${Cloud});
    background-repeat: no repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const LeftText = styled.div`
    position: sticky;
    top: 128px;
    padding-bottom: 128px;
    align-self: flex-start;
    color: #363636;
    font-size: 48px;
`

const RightText = styled(ImageUnderText)`
    align-self: flex-start;
    font-size: 32px;
`

const WhoWeAre = () => (
    <div>
        <Wrapper>
            <LeftText data-scroll-fade={true}>Who are we</LeftText>
            <RightText data-scroll-fade={true}> You need an agency which understands your business and works as your partner? 
                <br />
                <br /> 
                We are a group of developers who have built great products which scale. 
                Our teams come with a mix of experience to give the perfect balance.
                <br />
                <br />
                We love the modern web. We are open source contributors. 
                We also run a community of developers to share and spread knowledge.
            </RightText>
        </Wrapper>
        <BottomLine />
    </div>
)

export default WhoWeAre;
