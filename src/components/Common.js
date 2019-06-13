import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import Arrow from '../assets/icons/Arrow.svg';
import BlackArrow from '../assets/icons/BlackArrow.svg';
import Partition from '../assets/icons/Partition.svg';
import Copy from '../assets/icons/Copy.svg';


const Wrapper = styled.button`
    display: flex;
    align-items: baseline;
    background-color: transparent;
    border: none;
    outline: none;
`;

const Text = styled.div`
    font-size: 18px;
    color: ${ props => props.white ? '#f0f0f0' : '#000000' };
    margin-right: 10px;
`;

const PartitionWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

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

export const GreyLine = styled.div`
  height: 1px;
  margin: 1em 0;
  width: 150px;
  background:rgba(8, 8, 11, 0.15);
`;

const EmailWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

const EmailText = styled.text`
  text-align: center;
  font-size: 18px;
  line-height: 21px;
  color: rgba(54, 54, 54, 0.3);
  margin-top: 15px;
  margin-right: 4px;
`;

export const Email = (props) => (
    <EmailWrapper>
        <EmailText {...props}>
            {props.text}<Link to=''><u>jai@tech47.in</u></Link>
        </EmailText>
        <img src={Copy} width="11.5" height="15" alt="Logo" />
    </EmailWrapper>
)

