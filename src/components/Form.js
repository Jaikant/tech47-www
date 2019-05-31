import React from 'react';
import styled from 'react-emotion';
import colors from '../utils/colors';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage
} from 'formik';


export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ErrorMessage = styled(FormikErrorMessage)`
    color: ${props => props.theme.error};
    font-size: 0.6em;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  `;

export const Field = styled(FormikField)`
  font-family: Roboto;
  width: 100%;
  font-weight: 200;
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 5px;
  border: none;
  background-color: #fff;
  &::placeholder {
    color: rgba(54, 54, 54, 0.3);
  }
`;

export const Label = styled.label`
  margin-bottom: 0.3em;
  margin-left: 0.2em;
  font-family: Roboto Condensed;
  font-size: 32px;
  line-height: 37px;
  color: #101010;
`;

const LabeledFieldWrapper = styled.div`
   display: flex;
   flex-direction: column-reverse;
   padding: 0;
   margin-bottom: 0.4em;
   color: #FF0000;
`;

export const LabeledField = ({ name, label, ...props }) => (
  <LabeledFieldWrapper>
      <Label htmlFor={name}>{label}</Label>
    <ErrorMessage
      name={name}
    />
    <Field
      id={name}
      name={name}
      {...props}
    />
  </LabeledFieldWrapper>
);

export const FormText = styled.text`
    font-family: Roboto Condensed;
    font-size: 32px;
    line-height: 37px;
    color: #101010;
`
export const FormTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 0px 0px 20px;
`
