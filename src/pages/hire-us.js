import React from 'react';
import Layout from '../components/Layout';
import { ArrowButton } from '../components/Common';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Form,
  InputField,
  FormText,
  RowWrapper,
  FormBottomLine,
  Text,
  EmailWrapper,
  SubmitWrapper,
  EmailLink
} from '../components/Form';
import Copy from '../assets/icons/Copy.svg';

const HiringForm = ({ values, onSubmit }) => (
  <Formik
    initialValues={values}
    onSubmit={onSubmit}
    validationSchema={Yup.object().shape({
      name: Yup.string().required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      company: Yup.string(),
      description: Yup.string().required('Required')
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
      console.log("submitted", values);
    }}
  >
    {({ isSubmitting }) => (
      <Layout white >
        <Form>
          <div>
            <RowWrapper>
              <FormText>Tell us about you</FormText>
              <div>
                <InputField type="name" name="name" required placeholder='Your name' />
                <InputField type="email" name="email" required placeholder='email address' />
                <InputField type="company" name="company" placeholder='Your company' />
              </div>
            </RowWrapper>
            <RowWrapper>
              <FormText>Tell us about your idea</FormText>
              <InputField type="description" name="description" required placeholder='Give us a short description' />
            </RowWrapper>
          </div>
          <SubmitWrapper>
            <ArrowButton text='Submit' disabled={isSubmitting} />
            <FormBottomLine />
            <EmailWrapper>
              <Text>Prefer to send us an email instead? <EmailLink to=''>jai@tech47.in</EmailLink></Text>
              <img src={Copy} width="11.5" height="15" alt="Logo" />
            </EmailWrapper>
          </SubmitWrapper>
        </Form>

      </Layout>
    )}
  </Formik>
);

export default HiringForm;