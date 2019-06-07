import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';

const FooterDiv = styled.div`
  overflow: hidden;
  background: ${props => props.white ? 'white' : 'black'};  
  text-align: center;
  opacity: 0.99; // We need this for iPad pro when bg pictures starts covering footer.
  align-self: center;
  padding: 32px;
`;

const FooterText = styled.div`
  font-size: 14px;
  line-height: 28px;
  color: #F0F0F0;
`;

const Wrapper = styled.div`
  display: grid;
  // grid-template-columns: repeat(4, 1.5fr) 3fr repeat(2, 1.5fr);
  grid-template-columns: repeat(7, 1fr);
`;

const Footer = (props) => (
  // <FooterDiv {...props}>
     <div style={{textAlign: 'center', margin: '10px 0px '}}>  
      <Wrapper>
        <div />
      <Link to='/blog'><FooterText>Blog</FooterText></Link>
      <Link to='/contact'><FooterText>Contact</FooterText></Link>
      <Link to='/blog'><FooterText>Work with us</FooterText></Link>
      <Link to='/blog'><FooterText>Hire Us</FooterText></Link>
      <Link to='/blog'><FooterText>Community</FooterText></Link>
      <div />
      </Wrapper>
    <FooterText>{`©2019tech47`}</FooterText>
    </div> 

  // </FooterDiv>
);

export default Footer;
