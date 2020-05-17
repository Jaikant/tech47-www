import React from 'react';
import DailyIframe from "@daily-co/daily-js";
import Layout from '../components/Layout';
import VideoCall from '../components/VideoCall/VideoCall';
import BrowserUnsupported from '../components/VideoCall/BrowserUnsupported'


export default () => DailyIframe.supportedBrowser().supported ? <VideoCall /> : (
<Layout> <BrowserUnsupported /> </Layout>)