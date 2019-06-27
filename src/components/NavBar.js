import React, { useState, useRef, useEffect } from 'react'
import Logo from '../assets/icons/Logo.svg'
import LogoWhite from '../assets/icons/LogoWhite.svg'
import { MorphReplaceResize } from 'react-svg-morph';
import { Link } from 'gatsby';
import { css } from 'emotion';
import colors from '../utils/colors';
import styled from 'react-emotion'
import media from '../utils/media';

const menuConfig = [
   // { title: 'BLOG', url: '/blogs', submenu: false },
   // { title: 'CONTACT', url: '/contact', submenu: false },
   {title:'WORK WITH US', url:'/open-positions', submenu: false},
   {title:'HIRE US', url:'/hire-us', submenu: false},
   // {title:'COMMUNITY', url:'/community', submenu: false}
 ];

 const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: ${p => p.open ? 'all 0.45s ease-out, background 0.8s ease-out' :
    'all 0.4s ease-out, background 1s ease-out'};
`;

const MobileMenu = styled.div`
  display: block;
  ${media.tablet`
    display: none;
  `};
`;

const MobileUl = styled.ul`
  position: absolute;
  top: 80px;
  left: -32px;
  display: block;
  width: 100%;
  height: ${p => p.open ? '100%' : '0px'};
  background: #101010;
  padding: 0px 40px 0;
  list-style: none;
  transition: height 0.6s ease-out;
`;

const MobileLi = styled.li`
  border-bottom: 1px solid #333;
  margin-top: 5px;
  & > a {
    display: block;
    position: relative;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    line-height: 2.8;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
  }
  opacity: ${p => p.open ? 1 : 0};
  transition: opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99), -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99), opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99), opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99), -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  &:nth-child(1) {
    transition-delay: ${p => p.open ? '0.05s' : '0.28s'};
  }
  &:nth-child(2) {
    transition-delay: ${p => p.open ? '0.1s' : '0.24s'};
  }
  &:nth-child(3) {
    transition-delay: ${p => p.open ? '0.15s' : '0.20s'};
  }
  &:nth-child(4) {
    transition-delay: ${p => p.open ? '0.20s' : '0.16s'};
  }
  &:nth-child(5) {
    transition-delay: ${p => p.open ? '0.25s' : '0.12s'};
  }
  &:nth-child(6) {
    transition-delay: ${p => p.open ? '0.30s' : '0.08s'};
  }
  &:nth-child(7) {
    transition-delay: ${p => p.open ? '0.35s' : '0.04s'};
  }
`;

const MobileMenuItems = (props) => (
  <MobileMenu>
    <MobileUl {...props}>
      <MobileLi {...props}>
        <a href="#">Mac</a>
      </MobileLi>
      <MobileLi {...props}>
        <a href="#">iPad</a>
      </MobileLi>
      <MobileLi {...props}>
        <a href="#">iPhone</a>
      </MobileLi>
      <MobileLi {...props}>
        <a href="#">Watch</a>
      </MobileLi>
      <MobileLi {...props}>
        <a href="#">TV</a>
      </MobileLi>
      <MobileLi {...props}>
        <a href="#">Music</a>
      </MobileLi>
      <MobileLi {...props}>
        <a href="#">Support</a>
      </MobileLi>
    </MobileUl>
  </MobileMenu>
)


const MenuItem = styled.ul`
  display: none;  
  opacity: 0;
  ${media.tablet`
    display: flex;
    opacity: 0;
  `};
  width: 50%;
  list-style-type: none;
  margin: 0;
  font-size: 0.7em;
  margin-left: auto;
`;

const animateClose = [
  { width: '50%', transform: 'initial', opacity: '0.5' },
  {
    width: '40%',
    transform: 'translate3d(-3px, 0px, 0px)',
    opacity: '0'
  },
]

const animateOpen = [
  {
    width: '40%',
    transform: 'translate3d(3px, 0px, 0px)',
    opacity: '0'
  },
  { width: '50%', transform: 'initial', opacity: '0.5' },
]

 const MenuItems = React.forwardRef(({open = false}, ref) => {
  const mount = useRef();

  useEffect(() => {
    if (open) {
      ref.current.animate(animateOpen, {
        duration: 900,
        fill: 'both',
        easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
      })
    }  
    //mount.current prevents a closing animation on componentDidMount
    if (!open && mount.current){
      ref.current.animate(animateClose, {
        duration: 900,
        fill: 'both',
        easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
      })
    }

    mount.current = true;
  },[open]);
  return (
    <MenuItem innerRef={ref}>
      {menuConfig.map(
        menu => (
            <LiItems key={menu.title} to={menu.url} href={menu.href}>
              {menu.title}
            </LiItems>
        )
      )}
    </MenuItem>
 )});

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
         style={{color: colors.tech47white}}
         // activeStyle={{
         //   color: colors.tech47white,
         // }}
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
 
const MenuBar = ({ open }) => {  
  return (
   <div>
      <MorphReplaceResize width="16" height="16" rotation={"none"}>
         {open ? <MenuVertical key="open"/> : <Menu key="closed"/>}
      </MorphReplaceResize>
   </div>
  )
}

const MenuBarWrapper = styled.div`
  cursor: pointer;
`;

const LogoImg = styled.img`
   margin-bottom: 0;
`;

const NavBar = props => {
   const menuRef = useRef();
   const [open, setOpen] = useState(false);

   const showMenu = () => {
     console.log('...')
     setOpen(current => !current)
   }
 
  return (
    <NavWrapper {...props} open={open}>
      <Link to="/">
        <LogoImg src={props.white ? LogoWhite : Logo} width="110" height="30" alt="Logo" /> 
      </Link>
      {props.white ? null : 
        <>
          <MenuItems ref={menuRef} open={open}/>
          <MobileMenuItems open={open} />
          <MenuBarWrapper onClick={showMenu}>
            <MenuBar open={open} />
          </MenuBarWrapper>
        </>
      }
    </NavWrapper>
  )
}

export default NavBar
