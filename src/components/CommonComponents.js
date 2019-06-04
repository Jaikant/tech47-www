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
    color: ${ props => props.white ? '#f0f0f0' : '#000000' };
    margin-right: 10px;
`

const PartitionWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const ArrowButton = (props) => (
    <Wrapper>
       <Text {...props}>{props.text}</Text>
       {props.white ? <img src={Arrow} width="24" height="12" alt="Arrow" /> : <img src={BlackArrow} width="24" alt="BlackArrow" />}
    </Wrapper>
)

export const BottomLine = () => (
    <PartitionWrapper>
       <img src={Partition} width="300" height="3" alt="Partition" />
    </PartitionWrapper>
)