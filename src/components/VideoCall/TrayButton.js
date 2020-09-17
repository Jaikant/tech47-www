import React from 'react';
import styled from '@emotion/styled';
import Icon, {
  TYPE_MUTE_CAMERA,
  TYPE_MUTE_MIC,
  TYPE_SCREEN,
  TYPE_LEAVE
} from './Icon';

const MyTrayButton = styled.button`
  width: 44x;
  height: 44px;
  border: none;
  background-color: transparent;
  margin: 0 5px;
  margin-left: ${props => (props.newButtonGroup ? `auto` : `5px`)};
  &:disabled {
    opacity: 33%;
  }
  &:enabled {
    cursor: pointer;
  }
`;

/**
 * Props:
 * - type: string
 * - disabled: boolean
 * - highlighted: boolean
 * - onClick: () => ()
 * - newButtonGroup: boolean
 */
export default function TrayButton(props) {
  return (
    <MyTrayButton
      disabled={props.disabled}
      onClick={props.onClick}
      newGroup={props.newButtonGroup}
    >
      <Icon type={props.type} highlighted={props.highlighted} />
    </MyTrayButton>
  );
}

export { TYPE_MUTE_CAMERA, TYPE_MUTE_MIC, TYPE_SCREEN, TYPE_LEAVE };
