import React from 'react';
import styled from 'react-emotion';
import tech from '../assets/images/tech.svg';
import tech47 from '../assets/images/Tech47.svg';


const MainDiv = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font: sans-serif;
`;

const Labels = styled.div`
    font: sans-serif;
    font-size: 8px;
    width: 150px;
    display: flex;
    justify-content: space-evenly;
    a {
        color: #444;
    }
`;


const Index = () => (
    <MainDiv>
        <img src={tech47} width="120" alt="Logo" />
        <img src={tech} width="120" alt="Logo" />
        <Labels>
            <a href="mailto:jai@tech47.in">Email</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Address</a>

        </Labels>


    </MainDiv>
)

export default Index