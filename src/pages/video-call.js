import React from 'react';
import DailyIframe from '@daily-co/daily-js';
import { MainDiv } from '../components/Layout';
import SEO from '../components/SEO';
import VideoCall from '../components/VideoCall/VideoCall';
import BrowserUnsupported from '../components/VideoCall/BrowserUnsupported';

export default () => {
  if (typeof window != 'undefined') {
    return DailyIframe.supportedBrowser().supported ? (
      <>
        <SEO />
        <VideoCall />
      </>
    ) : (
      <MainDiv>
        {' '}
        <BrowserUnsupported />{' '}
      </MainDiv>
    );
  }
  return (
    <MainDiv>
      <BrowserUnsupported />
    </MainDiv>
  );
};
