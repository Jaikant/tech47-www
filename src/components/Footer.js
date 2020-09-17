import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import colors from '../utils/colors';

const FooterDiv = styled.div`
  background: ${props => props.light ? colors.tech47white : null};
  `;

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
`;

const FooterText = styled.div`
  color: ${props => props.light ? colors.secondary : colors.darkTheme.secondary};
`;

const LogoText = styled.div`
  font-size: 14px;
  text-align: center;
  color: ${props => props.light ? colors.footerLogo : colors.darkTheme.secondary};
`;

const Footer = (props) => (
     <FooterDiv {...props}>  
        <Wrapper>
        {/* <Link to='/'><FooterText {...props}>Blog</FooterText></Link>
        <Link to='/'><FooterText {...props}>Contact</FooterText></Link> */}
        {/* <Link to='/work-with-us'><FooterText {...props}>Work with us</FooterText></Link>
        <Link to='/hire-us'><FooterText {...props}>Hire Us</FooterText></Link> */}
        {/* <Link to='/'><FooterText {...props}>Community</FooterText></Link> */}
        </Wrapper>
        <LogoText {...props}>{`© 2020 Tech47`}</LogoText>
    </FooterDiv> 
);

export default Footer;
