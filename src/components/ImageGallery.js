import styled from 'react-emotion';
import media from '../utils/media';


export const ImageGalleryText = styled.div`
  font-weight: bold;
  font-size: 34px;
  ${media.tablet`
    font-size: 64px;
  `};
  line-height: 35px;
  ${media.tablet`
  line-height: 75px;
  `};
  text-align: center;
  color: #101010;
`;

export const Wrapper = styled.div`
  background: white;
  margin-bottom: 150px;
  background-clip: padding-box;
  min-height: calc(100vh - 32px);
  ${media.tablet`
    min-height: calc(100vh - 64px);
  `};
  ${media.desktop`
    min-height: calc(100vh - 128px);
  `};
`;

export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${media.tablet`
    grid-template-columns: 1fr 1fr;
  `};
  ${media.desktop`
    grid-template-columns: 1fr 1fr 1fr;
  `};
  grid-gap: 10px 10px;
`;
