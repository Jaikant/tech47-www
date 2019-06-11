import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
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
    justify-content: center;
`;

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
  border: none;
  outline: none;
  background-color: #fff;
  &::placeholder {
    color: rgba(54, 54, 54, 0.3);
  }
`;

const FieldWrapper = styled.div`
   display: flex;
   flex-direction: column-reverse;
   color: #FF0000;
  
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
    color: #101010;
`;

export const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 50px;
`;

export const FormBottomLine = styled.div`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid rgba(8, 8, 11, 0.15);
  margin: 1em 0;
  width: 150px;
  padding: 0;
`;

export const Text =styled.text`
  text-align: center;
  font-size: 18px;
  line-height: 21px;
  color: rgba(54, 54, 54, 0.3);
  margin-right: 5px;
  margin-top: 15px;
`;

export const EmailWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

export const EmailLink = styled(Link)`
  text-decoration: underline;
  outline: none;
`;

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};


export const SubmitWrapper = styled.div`
  margin: 2rem 26rem 0rem 0rem;

  // @media ${device.desktop} {
  //   margin: 2rem 26rem 0rem 0rem;
  // }

  // @media ${device.mobileS} {
  //   margin: 2rem 0rem 0rem 0rem;
  // }
`;
