import React from 'react';
import styled from 'react-emotion';
import colors from '../utils/colors';
import { BottomLine } from './Common';
import media from '../utils/media';


const Wrapper = styled.div`
    display: grid;
`;

const SubWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    ${media.tablet`
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr;
    `};
    align-items: center;
    justify-items: center;
    `

const Title = styled.text`
    font-size: 40px;
    ${media.tablet`
     font-size: 60px;
    `};
    color: ${colors.tech47white};
`;

const Subtitle = styled.text`
    font-size: 26px;
    ${media.tablet`
     font-size: 34px;
    `};
    color: ${colors.darkTheme.primaryLight};
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
`;

const CommunityLanding = (props) => (
        <Wrapper>
            <SubWrapper>
            <Text>
             <Title>{props.title}</Title>
             <Subtitle>{props.subtitle}</Subtitle>
            </Text>
             {props.image}
             </SubWrapper>
             <BottomLine />
        </Wrapper>  
)

export default CommunityLanding
