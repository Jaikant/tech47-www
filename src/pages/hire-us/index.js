/* global analytics */
import React from 'react';
import { navigate } from 'gatsby';
import SEO from '../../components/SEO';
import { MainDiv } from '../../components/Layout';
import { ArrowButton, Email } from '../../components/Common';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Form, InputField, FormText, RowWrapper } from '../../components/Form';

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const HiringForm = ({ values, onSubmit, location }) => (
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
      setSubmitting(true);
      console.log('the values are ', values);
      analytics.track('tech47-contact', {
        company: values.company,
        description: values.description,
        email: values.email,
        name: values.name
      });

      navigate(`confirm`, {
        replace: true,
        state: { values }
      });
    }}
  >
    {({ isSubmitting }) => (
      <MainDiv white>
        <SEO />
        <Form
          name="tech47"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <p hidden>
            <label htmlFor="botField">
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <div>
            <RowWrapper>
              <FormText>Tell us about you</FormText>
              <div>
                <InputField
                  type="name"
                  name="name"
                  required
                  placeholder="your name"
                />
                <InputField
                  type="email"
                  name="email"
                  required
                  placeholder="email address"
                />
                <InputField
                  type="company"
                  name="company"
                  placeholder="your company"
                />
              </div>
            </RowWrapper>
            <RowWrapper>
              <FormText>Tell us about your idea</FormText>
              <InputField
                type="description"
                name="description"
                required
                placeholder="Give us a short description"
              />
            </RowWrapper>
            <RowWrapper>
              <div />
              <ArrowButton
                text="Submit"
                disabled={isSubmitting}
                style={{ marginTop: '50px' }}
              />
            </RowWrapper>
          </div>
          <Email text="Prefer to send us an email instead? " />
        </Form>
      </MainDiv>
    )}
  </Formik>
);

export default HiringForm;
