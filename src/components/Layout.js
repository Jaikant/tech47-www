import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { Helmet } from 'react-helmet';
import 'typeface-quattrocento-sans';
import 'typeface-work-sans';
import { navigate } from 'gatsby';
import BlogLanding from './BlogCommunity';
import Footer from '../components/Footer';
import colors from '../utils/colors';
import { ArrowButton } from './Common';
import NavBar from './NavBar';
import media from '../utils/media';
import Tech47Image from '../assets/images/Tech47Image.jpg';
import Blog from '../assets/icons/Blogs.svg';
import { gridTemplateColumns, gridTemplateRows } from 'styled-system';

/* eslint-disable */
//import normalize from 'normalize.css';

//Page which have the reverse theme:
const reverseColorPages = ['hire-us', 'blog'];
//Pages which have reverse theme, but the nav is normal.
const customPages = ['blogs'];

//No nav or layout.
const NoNavLayoutPages = ['video-call'];

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

  padding: 32px;
  ${media.tablet`
    padding: 64px;
  `};
  ${media.desktop`
    padding: 128px;
  `};

  min-height: ${props => (props.fixedHeight ? '100vh' : 'none')};
  // @media (min-width: 768px) {
  //   min-height: ${props =>
    props.fixedHeight ? 'calc(100vh - 32px)' : 'none'};
  // }
  // @media (min-width: 768px) {
  //   min-height: ${props =>
    props.fixedHeight ? 'calc(100vh - 64px)' : 'none'};
  // }
  // @media (min-width: 992px) {
  //   min-height: ${props => (props.fixedHeight ? '100vh' : 'none')};
  // }
  background: ${props => (props.white ? 'white' : colors.darkTheme.primary)};

`;

const ExternalLink = styled.a`
  &active {
    background-color: #fff;
  }
`;

const LayoutPages = ({
  normalColors,
  reverseColors,
  custom,
  noNavLayout,
  children,
  ...props
}) => {
  if (reverseColors) {
    return (
      <MainDiv {...props} white={true}>
        <NavBar {...props} white={true} />
        {children}
        <Footer {...props} />
      </MainDiv>
    );
  }

  if (custom) {
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

  if (noNavLayout) {
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

const Layout = ({ children, uri }) => {
  const rootUri = uri && uri.split('/');
  const reverseColors =
    reverseColorPages.indexOf(rootUri && rootUri[1]) === -1 ? false : true;

  const custom =
    customPages.indexOf(rootUri && rootUri[1]) === -1 ? false : true;
  const noNavLayout =
    NoNavLayoutPages.indexOf(rootUri && rootUri[1]) === -1 ? false : true;

  return (
    <>
      <Global
        styles={css`
          * {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            font-weight: 400;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
          }
          body {
            background-color: ${colors.darkTheme.primary};
            color: ${colors.darkTheme.secondary};
          }
          a {
            text-decoration: none;
            color: inherit;
          }
          a:hover {
            cursor: pointer;
            text-decoration: none;
            color: ${colors.gray.calm};
            transition: color 0.15s ease-in;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            color: ${colors.darkTheme.secondary};
          }
        `}
      />
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>We Build React Web Apps. Because we love to.</title>
        <meta
          name="title"
          content="We Build React Web Apps.Because we love to."
        />
        <meta
          name="description"
          content="You need an agency which understands your business and works as your partner?
          We are a group of developers who have built great products which scale.
          Our teams come with a mix of experience to give the perfect balance.
          "
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tech47.in/" />
        <meta
          property="og:title"
          content="We Build React Web Apps.Because we love to."
        />
        <meta
          property="og:description"
          content="You need an agency which understands your business and works as your partner?
          We are a group of developers who have built great products which scale.
          Our teams come with a mix of experience to give the perfect balance.
          "
        />
        <meta
          property="og:image"
          content={`https://www.tech47.in${Tech47Image}`}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.tech47.in/" />
        <meta
          property="twitter:title"
          content="We Build React Web Apps.Because we love to."
        />
        <meta
          property="twitter:description"
          content="You need an agency which understands your business and works as your partner?
          We are a group of developers who have built great products which scale.
          Our teams come with a mix of experience to give the perfect balance.
          "
        />
        <meta
          property="twitter:image"
          content={`https://www.tech47.in${Tech47Image}`}
        />
      </Helmet>

      <LayoutPages
        reverseColors={reverseColors}
        custom={custom}
        noNavLayout={noNavLayout}
        children={children}
      />
    </>
  );
};

export default Layout;
