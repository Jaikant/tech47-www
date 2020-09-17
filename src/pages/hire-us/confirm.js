import React from 'react';
import Confirmation from '../../assets/icons/Confirm.svg';
import { ConfirmText, ConfirmWrapper } from '../../components/Content';
import { FormText as Text } from '../../components/Form';
import { ArrowButton, Link } from '../../components/Common';

const Confirm = props => (
  <ConfirmWrapper>
    <img src={Confirmation} width="90" height="90" alt="Logo" />
    <Text>
      Thank you,{' '}
      {props.location.state ? props.location.state.values.name : 'very much!'}
    </Text>
    <ConfirmText>We will get back to you shortly.</ConfirmText>
    <Link to="/">
      <ArrowButton text="Home" style={{ fontWeight: 'bold' }} />
    </Link>
  </ConfirmWrapper>
);

export default Confirm;
