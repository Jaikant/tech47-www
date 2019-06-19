import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import colors from '../utils/colors';

const FooterDiv = styled.div`
  background: ${props => props.light ? colors.tech47white : null};
`;

const Wrapper = styled.div`
  // display: flex;
  // justify-content: space-evenly;
  display: grid;
  justify-items: center;
  grid-column-gap: 5px;
  grid-template-columns: repeat(5, 1fr);
`;

const FooterText = styled.div`
  font-size: 18px;
  color: ${props => props.light ? colors.secondary : colors.darkTheme.secondary};
`;

const LogoText = styled.div`
  text-align: center;
  font-size: 15px;
  margin-top: 10px;
  color: ${props => props.light ? colors.footerLogo : colors.darkTheme.secondary};
`;

const Footer = (props) => (
     <FooterDiv {...props}>  
      <Wrapper>
      <Link to='/blog'><FooterText {...props}>Blog</FooterText></Link>
      <Link to='/contact'><FooterText {...props}>Contact</FooterText></Link>
      <Link to='/work-with-us'><FooterText {...props}>Work with us</FooterText></Link>
      <Link to='/hire-us'><FooterText {...props}>Hire Us</FooterText></Link>
      <Link to='/community'><FooterText {...props}>Community</FooterText></Link>
      </Wrapper>
    <LogoText {...props}>{`©2019tech47`}</LogoText>
    </FooterDiv> 
);

export default Footer;
