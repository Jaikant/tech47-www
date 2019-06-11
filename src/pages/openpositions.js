import React from 'react'
import styled from 'react-emotion';
import NavBar from '../components/NavBar';
import { ArrowButton } from '../components/Common';
import OpenPosition  from '../components/OpenPosition';
import positions from './positions.js';
import Copy from '../assets/icons/Copy.svg';
import Layout from '../components/Layout';

const Background = styled.div`
    background: white;
    height: 100vh;
`

const PositionsWrapper = styled.div`
    display: grid;
    justify-items: center;
`
const Email = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    padding-top: 200px;
`
const EmailText = styled.div`
    font-size: 18px;
    color: rgba(8, 8, 11, 0.3);
    margin-right: 5px;
`
const OpenPositions = () => (
    // <Background>
    //     <NavBar white />
    <Layout white>
            <ArrowButton text="Go back" />
        <PositionsWrapper>
        {positions.map((position) => (
            <OpenPosition position={position.position} description={position.description} />
        ))}
        </PositionsWrapper>
        <Email>
        <EmailText>Send us an email <u>jai@tech47.in</u></EmailText>
        <img src={Copy} alt="Copy" />
        </Email>
        </Layout>
    // </Background>
)

export default OpenPositions;