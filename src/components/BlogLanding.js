import React from 'react';
import styled from 'react-emotion';
import Blog from '../assets/icons/Blogs.svg';
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
             <Title>Our views on technology.  </Title>
             <Subtitle>Because we all have to make informed decisions.</Subtitle>
            </Text>
            <img src={Blog} width="200px" height="200px" alt="Social" />
        </Wrapper>
        <BottomLine />
    </div>
)

export default CommunityLanding
