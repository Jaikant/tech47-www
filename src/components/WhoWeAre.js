import React from 'react';
import styled from 'react-emotion';
import { BottomLine } from './Common';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 4fr;
    grid-gap: 50px;
    align-items: center;
    align-content: center;
    height: 100vh;
    padding: 0px 80px 0px 40px;
`

const Text = styled.div`
    font-size: 48px;
`

const Text2 = styled.div`
    font-size: 36px;
`

const WhoWeAre = () => (
    <div>
    <Wrapper>
    <Text>Who are we</Text>
    <Text2> You need an agency which understands your business and works as your partner?<br /><br /> We are a group of developers who have built great products which scale. Our teams come with a mix of experience to give the perfect balance.<br /><br /> We love the modern web. We are open source contributors. We also run a community of developers to share and spread knowledge.</Text2>
    </Wrapper>
    <BottomLine />
    </div>
)

export default WhoWeAre;