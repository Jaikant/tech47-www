import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import colors from '../utils/colors';

const FooterDiv = styled.div`
  text-align: center;
  margin: 10px 0px;
  background: ${props => props.light ? colors.tech47white : null};
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const FooterText = styled.div`
  font-size: 18px;
  color: ${props => props.light ? colors.secondary : colors.darkTheme.secondary};
`;

const LogoText = styled.text`
  font-size: 15px;
  color: ${props => props.light ? colors.footerLogo : colors.darkTheme.secondary};
`;

const Footer = (props) => (
     <FooterDiv {...props}>  
      <Wrapper>
        <div />
      <Link to='/blog'><FooterText {...props}>Blog</FooterText></Link>
      <Link to='/contact'><FooterText {...props}>Contact</FooterText></Link>
      <Link to='/work-with-us'><FooterText {...props}>Work with us</FooterText></Link>
      <Link to='/hire-us'><FooterText {...props}>Hire Us</FooterText></Link>
      <Link to='/community'><FooterText {...props}>Community</FooterText></Link>
      <div />
      </Wrapper>
    <LogoText {...props}>{`©2019tech47`}</LogoText>
    </FooterDiv> 
);

export default Footer;
