import React from 'react';
import styled from 'react-emotion';
import Blog from '../assets/icons/Blogs.svg';
import colors from '../utils/colors';
import { BottomLine } from './Common';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    justify-items: center;
    height: calc(100vh - 195px);
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

const BlogLanding = () => (
    <div>
        <Wrapper>
            <Text>
                <Title>Our views on technology.  </Title>
                <Subtitle>Because we all have to make informed decisions.</Subtitle>
            </Text>
            <img src={Blog} width="360" height="273.5" alt="Social" />
        </Wrapper>
        <BottomLine />
    </div>
)

export default BlogLanding
