import React from 'react';
import styled, { injectGlobal } from 'react-emotion';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import 'typeface-quattrocento-sans';
import 'typeface-work-sans';
import { StaticQuery, graphql } from "gatsby"
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import colors from '../utils/colors';
import LogoFull from '../assets/images/LogoFull.svg';
import SmallLogo from '../assets/images/SmallLogo.png';
import "../css/prism.css";
import NavBar from './NavBar';
import media from '../utils/media';

/* eslint-disable */
//import normalize from 'normalize.css';

injectGlobal`
  * {
      //font: 16px/1.5em "Source Sans Pro",Arial,sans-serif;
      font: sans-serif;
      box-sizing: padding-box;
  };
  body {
    background-color: ${colors.darkTheme.primary};
    color: ${colors.darkTheme.secondary};
  };
  a {
    text-decoration: none;
    color: inherit;
  };
  a:hover {
    cursor: pointer;
    text-decoration: none;
    color: ${colors.gray.calm};
    transition: color 0.15s ease-in;
  };
  h1, h2, h3, h4, h5, h6, p {
    color: ${colors.darkTheme.secondary}
  };
`;
/* eslint-enable */
const MainDiv = styled.div`
  padding: 32px;
  width: 100%;
  min-height: 100vh;
  max-height: ${props => props.fixedHeight ? '100vh' : 'none'};
  background: ${props => props.white ? 'white' : colors.darkTheme.primary };
  ${media.tablet`
    padding: 64px;
  `};
  ${media.desktop`
    padding: 128px;
  `};
`;

const Layout = ({ children, location, ...props }) => {
  return (
   <StaticQuery
     query={graphql`
       query LayoutQuery {
         site {
           siteMetadata {
             title
           }
         }
        logoImage: imageSharp(fluid: {originalName: { regex: "/LogoFull/" }}) {
          resize(width: 1843, height: 425, cropFocus: CENTER) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            src
          }
        }
        logoWhite: imageSharp(fluid: {originalName: { regex: "/Htech47-white/" }}) {
          resize(width: 1843, height: 425, cropFocus: CENTER) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            src
          }
        }
       }
     `}
     render={data => (
       <MainDiv {...props}>
         <Helmet>
           <link rel="shortcut icon" href={SmallLogo} type="image/x-icon" />
           <link rel="icon" href={SmallLogo} type="image/x-icon" />
         </Helmet>
         {/* <Navigation
           title={data.site.siteMetadata.title}
           logo={LogoFull}
           logoWhite={LogoFull}
           location={location}
         /> */}
         <NavBar {...props} />
            {children}
         {props.footer ?  <Footer {...props} /> : null}
       </MainDiv>
     )}
  />
  )
}

Layout.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string
      })
    }),
    logoImage: PropTypes.shape({
      resize: PropTypes.shape({
        src: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  })
};

export default Layout;