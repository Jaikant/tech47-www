import React from 'react'
import { navigate } from "gatsby"
import Layout from '../../components/Layout'
import { ArrowButton, Email } from '../../components/Common'
import * as Yup from 'yup'
import { Formik } from 'formik'
import {
  Form,
  InputField,
  FormText,
  RowWrapper
} from '../../components/Form'


const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')


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
      description: Yup.string().required('Required'),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(true)
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
           ...values
        }),
      })
      .then(() => { 
          setSubmitting(false)
          console.log('submitted', values)
          navigate(
            `hire-us/confirm/`,
            { replace: true }
          )  
        })
      .catch(error => {
          setSubmitting(false)
          alert(error)
        })
    }}
  >
    {({ isSubmitting }) => (
      <Layout white>
        <Form
         name="contact"
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
               <ArrowButton text="Submit" disabled={isSubmitting} style={{marginTop: '50px'}} />
            </RowWrapper>
          </div>
          <Email text="Prefer to send us an email instead?" />
        </Form>
      </Layout>
    )}
  </Formik>
)

export default HiringForm
