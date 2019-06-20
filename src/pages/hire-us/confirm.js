import React from 'react';
import Confirmation from '../../assets/icons/Confirm.svg';
import { ConfirmText, ConfirmWrapper } from '../../components/Content';
import { FormText as Text } from '../../components/Form';
import { ArrowButton } from '../../components/Common';
import { Link } from 'gatsby';



const Confirm = () => (
    <ConfirmWrapper>
        <img src={Confirmation} width="90" height="90" alt="Logo" />
        <Text>Thank you, Steve</Text>
        <ConfirmText>We will get back to you shortly.</ConfirmText>
        <Link><ArrowButton text='Go back' style={{ fontWeight: 'bold' }} /></Link>
    </ConfirmWrapper>
)

export default Confirm