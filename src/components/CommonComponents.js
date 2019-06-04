import React from 'react';
import styled from 'react-emotion';
import Arrow from '../assets/icons/Arrow.svg';
import BlackArrow from '../assets/icons/BlackArrow.svg';
import Partition from '../assets/icons/Partition.svg';

const Wrapper = styled.div`
    display: flex;
    align-items: baseline;
`
const Text = styled.div`
    font-size: 18px;
    color: ${ props => props.black ? '#000000' : '#f0f0f0' };
    margin-right: 10px;
`

const PartitionWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const ArrowButton = (props) => (
    <Wrapper>
       <Text {...props}>{props.text}</Text>
       {props.black ? <img src={BlackArrow} width="24" alt="BlackArrow" /> : <img src={Arrow} width="24" alt="Arrow" />}
    </Wrapper>
)

export const PartitionEnd = () => (
    <PartitionWrapper>
       <img src={Partition} width="300" height="3" alt="Partition" />
    </PartitionWrapper>
)