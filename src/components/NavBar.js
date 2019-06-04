import React from 'react'
import Logo from '../assets/icons/Logo.svg';
import Menu from '../assets/icons/Menu.svg';
import styled from 'react-emotion';

const NavWrapper = styled.div`
   background: ${props => props.white ? 'white' : null};
   padding: 15px 30px 0px 30px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const NavBar = (props) =>(
   <NavWrapper {...props}>
   <img src={Logo} width="110" height="30" alt="Logo" />
   { props.white ? null :  <img src={Menu} width="30" height="11.5" alt="Menu" /> }
   </NavWrapper>
   )

export default NavBar;
