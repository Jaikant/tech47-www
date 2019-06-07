import React from 'react';
import styled from 'react-emotion';
import Social from '../assets/icons/Community.svg';
import colors from '../utils/colors';
import { BottomLine } from './Common';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr 1.5fr 1fr;
    grid-column-gap: 4px;
    align-items: center;
    justify-items: center;
    height: calc(100vh - 100px);
`;

const Title = styled.h1`
    font-size: 30px;
    line-height: 36px;
    color: ${colors.tech47white};
`;

const Subtitle = styled.text`
    font-size: 18px;
    line-height: 18px;
    word-spacing: 3px;
    color: ${colors.darkTheme.primaryLight};
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
`;

const CommunityLanding = () => (
    <div>
        <Wrapper>
            <div />
            <Text>
             <Title>Our community initiatives.  </Title>
             <Subtitle>Because we are grateful to have recieved so much.</Subtitle>
            </Text>
            <img src={Social} width="200px" height="200px" alt="Social" />
        </Wrapper>
        <BottomLine />
    </div>
)

export default CommunityLanding
