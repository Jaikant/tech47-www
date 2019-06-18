import styled from 'react-emotion';

export const ImageGalleryText = styled.div`
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
  text-align: center;
  color: #101010;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  margin: 50px 50px 120px 50px;
`;

export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px 10px;
`;
