import React from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage
} from 'formik';
import media from '../utils/media';



export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 32px);
    ${media.desktop`
    min-height: calc(100vh - 128px);
    `};
    ${media.tablet`
    min-height: calc(100vh - 64px);
    `};
`;

export const Field = styled(FormikField)`
  font-weight: 200;
  font-size: 24px;
  ${media.tablet`
    font-size: 36px;
    `};
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
  font-size: 22px;
  line-height: 27px;
  ${media.tablet`
    font-size: 32px;
    line-height: 37px;
  `}
  padding-top: 30px;
  color: ${colors.darkTheme.primary};
`;

export const RowWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  ${media.tablet`
    grid-template-columns: 1fr 4fr;
  `}
  grid-gap: 0px;
  ${media.tablet`
    grid-gap: 26px;
  `}
`;


