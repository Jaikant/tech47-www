import React, { useState, useRef, useEffect } from 'react'
import Logo from '../assets/icons/Logo.svg'
import { MorphReplaceResize } from 'react-svg-morph';
import { Link } from 'gatsby';
import { css } from 'emotion';
import colors from '../utils/colors';
import styled from 'react-emotion'

const menuConfig = [
   { title: 'BLOG', url: '/blogs', submenu: false },
   { title: 'CONTACT', url: '/contact', submenu: false },
   {title:'WORK WITH US', url:'/open-positions', submenu: false},
   {title:'HIRE US', url:'/hire-us', submenu: false},
   {title:'COMMUNITY', url:'/community', submenu: false}
 ];

 const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuItem = styled.ul`
   list-style-type: none;
   display: flex;
   margin: 0;
   width: 50%;
   font-size: 0.7em;
   margin-left: auto;
`;

 const MenuItems = React.forwardRef((props, ref) => (
   <MenuItem innerRef={ref}>
     {menuConfig.map(
       menu => (
           <LiItems key={menu.title} to={menu.url} href={menu.href}>
             {menu.title}
           </LiItems>
       )
     )}
   </MenuItem>
 ));

 const LiItem = styled.li`
  margin: auto;
`;

 const LiItems = ({ to, href, children }) => (
   <LiItem>
     {to === '' ? (
       <a href={href} target="_blank">
         {children}
       </a>
     ) : (
       <Link
         to={to}
         activeStyle={{
           color: colors.darkTheme.primary
         }}
       >
         {children}
       </Link>
     )}
   </LiItem>
 );
 
class Menu extends React.Component {
   render() {
       return (
         <svg width="24" height="9" viewBox="0 0 24 9" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3H30V0H0V3ZM9.00626 11.5H29.0063V8.5H9.00626V11.5Z" fill="#F0F0F0"/>
         </svg>
       );
   }
}

class MenuVertical extends React.Component {
   render() {
       return (
         <svg width="9" height="24" viewBox="0 0 9 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V24H1V0H0ZM8 0V24H9V0H8Z" fill="#F0F0F0"/>
         </svg>         
       );
   }
}

const animateIn = [
   { width: '50%', transform: 'initial', opacity: '0.5' },
   {
     width: '40%',
     transform: 'translate3d(-3px, 0px, 0px)',
     opacity: '0'
   },
 ]
 
 const animateOut = [
   {
     width: '40%',
     transform: 'translate3d(3px, 0px, 0px)',
     opacity: '0'
   },
   { width: '50%', transform: 'initial', opacity: '0.5' },
 ]
 

const MenuBar = ({ menuRef }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
     if (open) {
      menuRef.current.animate(animateOut, {
         duration: 900,
         fill: 'both',
         easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
       })
     } else {
      menuRef.current.animate(animateIn, {
         duration: 900,
         fill: 'both',
         easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
       })
     }
  });

  const showMenu = () => {
    setOpen(current => !current)
  }
  
  return (
   <div onClick={showMenu}>
      <MorphReplaceResize width="16" height="16" rotation={"none"}>
         {open ? <MenuVertical key="open"/> : <Menu key="closed"/>}
      </MorphReplaceResize>
   </div>
  )
}

const LogoImg = styled.img`
   margin-bottom: 0;
`;

const NavBar = props => {
   const menuRef = useRef();

  return (
    <NavWrapper {...props}>
      <LogoImg src={Logo} width="110" height="30" alt="Logo" />
      <MenuItems ref={menuRef}/>
      <MenuBar menuRef={menuRef} />
    </NavWrapper>
  )
}

export default NavBar
