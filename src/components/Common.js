import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';
import Arrow from '../assets/icons/Arrow.svg';
import BlackArrow from '../assets/icons/BlackArrow.svg';
import Partition from '../assets/icons/Partition.svg';
import Copy from '../assets/icons/Copy.svg';
import Cloud from '../assets/images/CloudImage.jpg';

export const Link = styled(GatsbyLink)`
  cursor: pointer;
`;

const Wrapper = styled.button`
  display: flex;
  align-items: baseline;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  padding-left: 0px;
`;

const Text = styled.div`
  font-size: 18px;
  color: ${props => (props.white ? '#f0f0f0' : '#000000')};
  margin-right: 10px;
`;

const PartitionWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ArrowButton = props => (
  <Wrapper data-scroll-fade={true}>
    <Text {...props}>{props.text}</Text>
    {props.white ? (
      <img src={Arrow} width="24" height="12" alt="Arrow" />
    ) : (
      <img src={BlackArrow} width="24" alt="BlackArrow" />
    )}
  </Wrapper>
);

const animateIn = [
  { transform: 'translate3d(0px, 96px, 0px)', opacity: '0' },
  {
    transform: 'translate3d(0px, 0px, 0px)',
    opacity: '0.1'
  }
];

export const BottomLine = props => {
  const lineRef = useRef();
  useEffect(() => {
    lineRef.current.animate(animateIn, {
      duration: 900,
      fill: 'both',
      easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)'
    });
  });
  return (
    <PartitionWrapper ref={lineRef}>
      <img src={Partition} alt="Partition" data-scroll-fade={true} />
    </PartitionWrapper>
  );
};

export const GreyLine = styled.div`
  height: 1px;
  margin: 30px 0px 40px 0px;
  width: 150px;
  background: rgba(8, 8, 11, 0.15);
`;

const EmailWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const EmailText = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: rgba(54, 54, 54, 0.3);
  margin-right: 4px;
`;

export const Email = props => (
  <div>
    <GreyLine />
    <EmailWrapper>
      <EmailText>
        {props.text}
        <a href="mailto:jai@tech47.in">
          <u>jai@tech47.in</u>
        </a>
      </EmailText>
      <img src={Copy} width="11.5" height="15" alt="Logo" />
    </EmailWrapper>
  </div>
);

export const HeroText = styled.div`
  font-size: 48px;
  line-height: 110%;
  color: white;
  background: url(${Cloud});
  max-width: 780px;
  background-repeat: no repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ContentInset = styled.div`
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : '0px')};
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom ? paddingBottom : '0px'};
`;
