import React from 'react';
import styled from 'react-emotion';
import { BottomLine } from './Common';
import Cloud from '../assets/images/CloudImage.jpg';
import media from '../utils/media';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr;
    grid-template-columns: 1fr;
    ${media.tablet`
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr;
    `};
    grid-gap: 48px;
    align-items: center;
    padding-top: 128px;
    min-height: calc(100vh - 32px);
    ${media.tablet`
      min-height: calc(100vh - 64px);
    `};
    ${media.desktop`
      min-height: calc(100vh - 128px);
    `};  
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
    padding-bottom: 64px;
    align-self: flex-start;
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
            <div>
                <RightText data-scroll-fade={true}> 
                    You need an agency which understands your business and works as your partner? 
                </RightText>
                <br />
                <br /> 
                <RightText data-scroll-fade={true}> 
                    We are a group of developers who have built great products which scale. 
                    Our teams come with a mix of experience to give the perfect balance.
                </RightText>
                <br />
                <br /> 
                <RightText data-scroll-fade={true}> 
                    We love the modern web. We are open source contributors. 
                    We also run a community of developers to share and spread knowledge.
                </RightText>
                <br />
                <br /> 
            </div>
        </Wrapper>
        <BottomLine />
    </div>
)

export default WhoWeAre;
