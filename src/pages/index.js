import React from 'react';
import styled from 'react-emotion';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
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


const Index = (props) => (
<Layout {...props}>
        <Labels>
            <a href="mailto:jai@tech47.in">Email</a>
            <a href="/open-positions">Open Positions</a>
            <a href="/blog">Blogs</a>
            <a href="/meetups">Meet Ups</a>
            <a href="/contact">Address</a>

        </Labels>

</Layout>
)

export default Index