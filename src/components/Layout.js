import React from 'react';
import styled from '@emotion/styled';
import 'typeface-quattrocento-sans';
import 'typeface-work-sans';
import { navigate } from 'gatsby';
import BlogLanding from './BlogCommunity';
import Footer from '../components/Footer';
import { ArrowButton } from './Common';
import NavBar from './NavBar';
import media from '../utils/media';
import Blog from '../assets/icons/Blogs.svg';
import colors from '../utils/colors';

/* eslint-disable */

export const UnPadMainDiv = styled.div`
  margin: 0px -32px;
  ${media.tablet`page
  padding: 0px -64px;
`};
  ${media.desktop`
  padding: 0px -128px;
`};
`;

/* eslint-enable */
export const MainDiv = styled.div`
  overflow: hidden;
  max-width: 100%;
  ${media.tablet`
    grid-gap: 32px;
  `};
  ${media.desktop`
    grid-gap: 64px;
  `};

  padding: 32px 16px;
  ${media.tablet`
    padding: 64px;
  `};
  ${media.desktop`
    padding: 128px;
  `};
  min-height: ${props => (props.fixedHeight ? '100vh' : 'auto')};
  background: ${props => (props.white ? 'white' : colors.darkTheme.primary)};
`;

const ExternalLink = styled.a`
  &active {
    background-color: #fff;
  }
`;

const LayoutPages = ({ layoutType, children, ...props }) => {
  if (layoutType === 'reverseColorPages') {
    return (
      <MainDiv {...props} white={true}>
        <NavBar {...props} white={true} />
        {children}
        <Footer {...props} />
      </MainDiv>
    );
  }

  if (layoutType === 'customPages') {
    return (
      <>
        <MainDiv fixedHeight>
          <NavBar {...props} white={false} />
          <BlogLanding
            title="Our views on technology."
            subtitle="So you can make informed decisions."
            image={<img src={Blog} width="360" height="273.5" alt="Social" />}
          />
        </MainDiv>
        {children}
        <Footer {...props} />
      </>
    );
  }

  if (layoutType === 'NoNavLayoutPages') {
    return (
      <>
        <div
          style={{
            margin: '16px',
            position: 'fixed',
            zIndex: 100,
            display: 'grid'
          }}
          onClick={() => navigate('/')}
        >
          <div>
            Please note: This is an experimental interface. Clicking start call
            will prompt to turn on your camera. If you are contacting us for the
            first time, send us a whatsapp message instead. If you are on a PC
            and/or do not have whatsApp installed, you can contact us on
            <a href="tel:jai@tech47.in">
              {' '}
              <button> +91 9886106999 </button>
            </a>{' '}
            or email:{' '}
            <a href="mailto:jai@tech47.in">
              {' '}
              <button> jai@tech47.in </button>
            </a>{' '}
            or {` `} send us a{' '}
            <a href="https://wa.me/919886106999" target="_blank">
              <button> WhatsApp </button>
            </a>{' '}
            message.
            <ArrowButton text="Go Back" white={true} />
          </div>
        </div>
        {children}
        <Footer {...props} />
      </>
    );
  }

  return (
    <MainDiv {...props} white={false}>
      <NavBar {...props} white={false} />
      {children}
      <Footer {...props} />
    </MainDiv>
  );
};

const Layout = ({ children, uri, pageContext, ...rest }) => {
  return (
    <>
      <LayoutPages
        layoutType={pageContext && pageContext.layout}
        children={children}
      />
    </>
  );
};

export default Layout;
