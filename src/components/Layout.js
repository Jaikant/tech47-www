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
import favicon from '../assets/images/tech47-favicon2.png';
import LogoFull from '../assets/images/LogoFull.svg';
import "../css/prism.css"

/* eslint-disable */
//import normalize from 'normalize.css';

injectGlobal`
  * {
      //font: 16px/1.5em "Source Sans Pro",Arial,sans-serif;
      font: sans-serif;
      box-sizing: border-box;
  };
  body {
    // background-color: ${colors.darkTheme.primary};
    color: ${colors.darkTheme.secondary}
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
  display: grid;
  width: 100%;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
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
       <MainDiv>
         <Helmet>
           <link rel="shortcut icon" href={favicon} type="image/x-icon" />
           <link rel="icon" href={favicon} type="image/x-icon" />
         </Helmet>
         <Navigation
           title={data.site.siteMetadata.title}
           logo={LogoFull}
           logoWhite={LogoFull}
           location={location}
         />
         {children}
         <Footer title={data.site.siteMetadata.title} />
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
