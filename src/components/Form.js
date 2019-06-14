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
`;

export const Field = styled(FormikField)`
  font-weight: 200;
  font-size: 36px;
  border: none;
  outline: none;
  background-color: ${colors.tech47white};
  &::placeholder {
    color: ${colors.formPlaceholder}; 
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: ${props => props.theme.error};
  font-size: 0.6em;
  letter-spacing: 0.05em;
  text-transform: uppercase;
 `;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  color: ${colors.formvalidationColor};
`;

export const InputField = ({ name, ...props }) => (
  <FieldWrapper>
    <ErrorMessage
      name={name}
    />
    <Field
      id={name}
      name={name}
      {...props}
    />
  </FieldWrapper>
);

export const FormText = styled.text`
  font-size: 32px;
  line-height: 37px;
  color: ${colors.darkTheme.primary};
`;

export const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 26px;
`;

export const SubmitWrapper = styled.div`
  margin: 4rem 26rem 0rem 0rem;
`;

