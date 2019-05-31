import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Form,
  LabeledField,
  FormText, 
  FormTextWrapper
} from '../components/Form';

const HiringForm = ({ values, onSubmit}) => (
  <div>
    <Formik
      initialValues={values}
      onSubmit={onSubmit}
      validationSchema={Yup.object().shape({
          name: Yup.string().required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          company: Yup.string(),
          description: Yup.string()
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (                                                                                                                                                                                                                                                              
        <Form>
          <FormTextWrapper>
          <FormText>Tell us about you</FormText>
          <LabeledField type="name" name="name" placeholder='Your name'/>
          </FormTextWrapper>
          <LabeledField type="email" name="email" />
          <LabeledField type="company" name="company" /> 
          <FormTextWrapper>   
          <FormText>Tell us about your idea</FormText>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
          <LabeledField type="description" name="description"/>
          </FormTextWrapper>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default HiringForm;