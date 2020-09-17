import React from 'react';
import styled from '@emotion/styled';
import media from '../../utils/media'

const Para = styled.p`
  position: absolute;
  font-size: 14px;
  line-height: 17px;
  color: #4a4a4a;
  margin: 0px 32px 32px 16px;
  ${media.tablet`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `};
  p, h2 {
    color: #4a4a4a;
  }
`;

export default function BrowserUnsupported() {
  return (
    <Para>
      <h2>
      Looks like you need to upgrade your browser to make a video call to us.
      </h2>
      <br />
      <div>
      <p>
       Video calls rely on your browser, so it's key to have your browser be up to date:  
      </p>
      <ul>
        <li>
        Safari 12.1
        </li>
        <li>
        Chrome 74
        </li>
        <li>
        Firefox 66
        </li>
      </ul>
      <p>
      For mobile, Safari updates are bundled with iOS updates. Apple doesn't update Safari with every iOS release, but when they do, they give it the version number of the iOS version it first ships with. As of summer 2019, Daily.co works with iPhone with iOS 12.01 or newer
      You can join Daily.co calls on Chrome, Firefox, Safari, iOS Safari and Android Chrome. (Edge is limited to 1:1 calls.)
      </p>
      <p>
      It's strongly recommended you update to the latest OS for your device. And not just for video calling reasons — we say that for simply security, across the board. 
      </p>
      </div>
    </Para>
  );
}
