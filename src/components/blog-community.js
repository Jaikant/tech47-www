import React from 'react';
import styled from 'react-emotion';
import colors from '../utils/colors';
import { BottomLine } from './Common';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 30px;
    align-items: center;
    justify-items: center;
    height: 100vh;
`;

const Title = styled.text`
    font-size: 60px;
    color: ${colors.tech47white};
`;

const Subtitle = styled.text`
    font-size: 34px;
    color: ${colors.darkTheme.primaryLight};
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
`;

const CommunityLanding = (props) => (
    <div>
        <Wrapper>
            <Text>
             <Title>{props.title}</Title>
             <Subtitle>{props.subtitle}</Subtitle>
            </Text>
             {props.image}
        </Wrapper>
        <BottomLine />
    </div>
)

export default CommunityLanding
