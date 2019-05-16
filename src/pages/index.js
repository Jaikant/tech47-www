import React from 'react';
import styled from 'react-emotion';
import Helmet from 'react-helmet';
import favicon from '../assets/images/tech47-favicon2.png';
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
    font-size: 12px;
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    a {
        color: #444;
    }
`;


const Index = () => (
    <MainDiv>
        <Helmet title={`Tech47 - React.js, GraphQL, Node.js`}>
           <link rel="shortcut icon" href={favicon} type="image/x-icon" />
           <link rel="icon" href={favicon} type="image/x-icon" />
        </Helmet>

        <img src={tech47} width="120" alt="Logo" />
        <img src={tech} width="120" alt="Logo" />
        <Labels>
            <a href="mailto:jai@tech47.in">Email</a>
            <a href="/open-positions">Open Positions</a>
            <a href="/blog">Blogs</a>
            <a href="/meetups">Meet Ups</a>
            <a href="/contact">Address</a>

        </Labels>


    </MainDiv>
)

export default Index