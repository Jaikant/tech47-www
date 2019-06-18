import styled from 'react-emotion';
import colors from '../utils/colors';

export const ConfirmWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const ConfirmText = styled.text`
  font-size: 22px;
  line-height: 26px;
  color: ${colors.darkTheme.primaryLight};
  margin-bottom: 60px;
`;