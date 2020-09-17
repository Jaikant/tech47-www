import React, { useState, useRef, useEffect } from 'react';
import Logo from '../assets/icons/Logo.svg';
import LogoWhite from '../assets/icons/LogoWhite.svg';
import { MorphReplaceResize } from 'react-svg-morph';
import { Link, navigate } from 'gatsby';
import { css } from '@emotion/core';
import colors from '../utils/colors';
import styled from '@emotion/styled';
import media from '../utils/media';
import { ArrowButton } from '../components/Common';
import Partition from '../assets/icons/Partition.svg';
import VerticalPartition from '../assets/icons/VerticalPartition.svg';
import Arrow from '../assets/icons/Arrow.svg';
import Cloud from '../assets/images/CloudImage.jpg';

// disable scroll start

var keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.returnValue = false;
}

function keydown(e) {
  for (var i = keys.length; i--; ) {
    if (e.keyCode === keys[i]) {
      preventDefault(e);
      return;
    }
  }
}

function wheel(e) {
  preventDefault(e);
}

function disable_scroll() {
  if (typeof window != 'undefined') {
    if (window.addEventListener) {
      //https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
      let supportsPassive = false;
      try {
        window.addEventListener(
          'test',
          null,
          Object.defineProperty({}, 'passive', {
            get: function() {
              supportsPassive = true;
            }
          })
        );
      } catch (e) {}
      let wheelOpt = supportsPassive ? { passive: false } : false;
      let wheelEvent =
        'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

      window.addEventListener('DOMMouseScroll', wheel, {
        capture: true,
        passive: true
      });
      window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
      document.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    }
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
  }
}

function enable_scroll() {
  if (typeof window != 'undefined') {
    if (window.removeEventListener) {
      let supportsPassive = false;
      try {
        window.addEventListener(
          'test',
          null,
          Object.defineProperty({}, 'passive', {
            get: function() {
              supportsPassive = true;
            }
          })
        );
      } catch (e) {}
      let wheelOpt = supportsPassive ? { passive: false } : false;
      let wheelEvent =
        'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

      window.removeEventListener('DOMMouseScroll', wheel, false);
      window.removeEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
      document.removeEventListener('touchmove', preventDefault, wheelOpt);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
  }
}

// scroll code ends

const menuConfig = [
  // { title: 'BLOG', url: '/blogs', submenu: false },
  // { title: 'CONTACT', url: '/contact', submenu: false },
  { title: 'TALK TO US', url: '/video-call', submenu: false },
  { title: 'BLOGS', url: '/blogs', submenu: false },
  { title: 'HIRE US', url: '/hire-us', submenu: false },
  { title: 'COMMUNITY', url: '/community', submenu: false }
];

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  align-items: center;
  transition: ${p =>
    p.open
      ? 'all 0.45s ease-out, background 0.8s ease-out'
      : 'all 0.4s ease-out, background 1s ease-out'};
`;

const MobileMenu = styled.div`
  display: block;
  ${media.tablet`
    display: none;
  `};
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 80px;
  left: -32px;
  width: 100%;
  display: block;
  height: ${p => (p.open ? '100vh' : '0px')};
  background: ${p => (p.white ? '#FFFFFF' : '#101010')};
  padding: 0px 40px 0;
  list-style: none;
  transition: height 0.6s ease-out;
  z-index: 11;
  opacity: ${p => (p.open ? 1 : 0)};
  margin-left: 35px;
`;

const MenuComponentWrapper = styled.div`
  margin: 8px 0px 8px 0px;
`;

const Text = styled.div`
  font-size: 18px;
  background: url(${Cloud});
  background-repeat: no repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${p => (p.white ? '#000000' : 'transparent')};
`;

const MenuComponent = props => (
  <MenuComponentWrapper>
    <Text {...props}>{props.uppertext}</Text>
    <div
      onClick={() => {
        props.setOpen(false);
        navigate(props.to);
      }}
    >
      <ArrowButton text={props.text} white={!props.white} />
    </div>
  </MenuComponentWrapper>
);

const WeAreComponent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.5fr 4fr;
  align-items: center;
  margin-top: 15px;
`;
const WeAreRightWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const WeAreRight = props => (
  <WeAreRightWrapper>
    <Text>{props.text}</Text>
    <img src={Arrow} width="24" height="12" alt="Arrow" />
  </WeAreRightWrapper>
);

const MobileMenuItems = props => (
  <MobileMenu>
    <MenuWrapper {...props}>
      <MenuComponent
        uppertext="We build React web apps"
        text="Get in touch"
        to="/hire-us"
        {...props}
      />
      <img src={Partition} />
      {/* <MenuComponent
        uppertext="Work for Tech47"
        text="Open positions"
        to="/open-positions"
        {...props}
      />
      <img src={Partition} /> */}
      <MenuComponent
        uppertext="Talk to us"
        text="Video call us now"
        to="/video-call"
        {...props}
      />
      <img src={Partition} />
      <MenuComponent
        uppertext="Community initiatives"
        text="Giving back"
        to="/community"
        {...props}
      />
      <img src={Partition} />
      <MenuComponent
        uppertext="Views on technology"
        text="Blog"
        to="/blogs"
        {...props}
      />
      <img src={Partition} />
      {/* <WeAreComponent>
        <Text>We are</Text>
        <img src={VerticalPartition} height="200" />
        <div>
          <WeAreRight text="experts" />
          <WeAreRight text="community contributors" />
          <WeAreRight text="OSS contributors" />
        </div>
      </WeAreComponent>
      <img src={Partition} /> */}
    </MenuWrapper>
  </MobileMenu>
);

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
  font-size: 0.8em;
  margin-left: auto;
`;

const animateClose = [
  { width: '50%', transform: 'initial', opacity: '0.5' },
  {
    width: '40%',
    transform: 'translate3d(-3px, 0px, 0px)',
    opacity: '0'
  }
];

const animateOpen = [
  {
    width: '40%',
    transform: 'translate3d(3px, 0px, 0px)',
    opacity: '0'
  },
  { width: '50%', transform: 'initial', opacity: '0.5' }
];

const MenuItems = React.forwardRef(({ open = false, white }, ref) => {
  const mount = useRef();

  useEffect(
    () => {
      if (open) {
        ref.current.animate(animateOpen, {
          duration: 900,
          fill: 'both',
          easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)'
        });
      }
      //mount.current prevents a closing animation on componentDidMount
      if (!open && mount.current) {
        ref.current.animate(animateClose, {
          duration: 900,
          fill: 'both',
          easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)'
        });
      }

      mount.current = true;
    },
    [open]
  );
  return (
    <MenuItem ref={ref}>
      {menuConfig.map(menu => (
        <LiItems key={menu.title} to={menu.url} href={menu.href} white={white}>
          {menu.title}
        </LiItems>
      ))}
    </MenuItem>
  );
});

const LiItem = styled.li`
  margin: auto;
`;

const StyledLink = styled(Link)`
  color: ${props =>
    props.white ? colors.darkTheme.primary : colors.tech47white};
  &:hover {
    color: ${props => (props.white ? '#000000' : '#ffffff')};
    text-decoration: underline;
  }
`;

const LiItems = ({ to, href, white, children }) => (
  <LiItem>
    {to === '' ? (
      <a href={href} target="_blank">
        {children}
      </a>
    ) : (
      <StyledLink
        to={to}
        // style={{ color: colors.tech47white }}
        activeStyle={{
          color: 'red'
        }}
        white={white}
      >
        {children}
      </StyledLink>
    )}
  </LiItem>
);

const Menu = () => {
  return (
    <svg
      width="24"
      height="9"
      viewBox="0 0 24 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 3H30V0H0V3ZM9.00626 11.5H29.0063V8.5H9.00626V11.5Z"
        fill="#F0F0F0"
      />
    </svg>
  );
};

const MenuWhite = () => {
  return (
    <svg
      width="24"
      height="9"
      viewBox="0 0 24 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 3H30V0H0V3ZM9.00626 11.5H29.0063V8.5H9.00626V11.5Z"
        fill="#101010"
      />
    </svg>
  );
};

const MenuVertical = () => {
  return (
    <svg
      width="9"
      height="24"
      viewBox="0 0 9 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0V24H1V0H0ZM8 0V24H9V0H8Z"
        fill="#F0F0F0"
      />
    </svg>
  );
};

const MenuVerticalWhite = () => {
  return (
    <svg
      width="9"
      height="24"
      viewBox="0 0 9 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0V24H1V0H0ZM8 0V24H9V0H8Z"
        fill="#101010"
      />
    </svg>
  );
};

const MenuBarWhite = ({ open }) => {
  if (open) {
    return (
      <MorphReplaceResize width="16" height="16" rotation={'none'}>
        <MenuVerticalWhite key="open" />
      </MorphReplaceResize>
    );
  }
  return (
    <MorphReplaceResize width="16" height="16" rotation={'none'}>
      <MenuWhite key="closed" />
    </MorphReplaceResize>
  );
};

const MenuBar = ({ open }) => {
  if (open) {
    return (
      <MorphReplaceResize width="16" height="16" rotation={'none'}>
        <MenuVertical key="open" />
      </MorphReplaceResize>
    );
  }
  return (
    <MorphReplaceResize width="16" height="16" rotation={'none'}>
      <Menu key="closed" />
    </MorphReplaceResize>
  );
};

const MenuBarWrapper = styled.div`
  cursor: pointer;
`;

const LogoImg = styled.img`
  margin-bottom: 0;
`;

const NavBar = props => {
  const menuRef = useRef();
  const [open, setOpen] = useState(false);
  const [isTablet, setTablet] = useState(true);

  const updateMedia = () => {
    setTablet(window.innerWidth >= 768);
  };

  useEffect(() => {
    if (typeof window != 'undefined') {
      setTablet(window.innerWidth >= 768);
      window.addEventListener('resize', updateMedia);
    }
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const showMenu = () => {
    setOpen(current => !current);
  };

  return (
    <NavWrapper {...props} open={open}>
      <Link to="/">
        <LogoImg
          src={props.white ? LogoWhite : Logo}
          width="110"
          height="30"
          alt="Logo"
        />
      </Link>
      <>
        <MenuItems ref={menuRef} open={open} white={props.white} />
        {open && !isTablet ? disable_scroll() : enable_scroll()}
        <MobileMenuItems open={open} setOpen={setOpen} white={props.white} />
        <MenuBarWrapper onClick={showMenu}>
          {props.white ? <MenuBarWhite open={open} /> : <MenuBar open={open} />}
        </MenuBarWrapper>
      </>
    </NavWrapper>
  );
};

export default NavBar;
