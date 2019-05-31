/* eslint-disable no-undef, react/prop-types */
import React from 'react'
import { css } from 'react-emotion'
import { push, graphql } from 'gatsby'
import { Box, Flex } from '../../components/Layout'
import colors from '../../utils/colors'
import ButtonPrimary from '../../components/Buttons'
import Layout from '../../layouts'
import BigCard from '../../components/BigCard'
import { Header } from '../../components/Layout';

const input = css`
  display: block;
  box-sizing: border-box;
  padding: 10px 16px;
  width: 100%;
  outline: 0;
  border: 1px solid #ccc;
  border-radius: 0;
  background: #fff;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  color: #616161;
  font-size: 18px;
  line-height: 1.3333333;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  & :focus {
    border-color: ${colors.primaryOld};
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(59, 89, 152, 0.6);
  }
`

const label = css`
  display: inline-block;
  text-align: left;
  margin-bottom: 16px;
  width: 100%;
`

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  expiredCallback = () => push('/Contact')

  handleSubmit = e => {
    e.preventDefault()

    if (
      !e.target.name.value ||
      !e.target.email.value ||
      !e.target.message.value
    ) {
      return alert('Kindly fill all fields')
    }

    return fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      }),
    })
      .then(() => push('/thanks'))
      .catch(error => alert(error))
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, message } = this.state
    return (
      <Flex>
        <form
          css="max-width: 500px;"
          onSubmit={this.handleSubmit}
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
          <label className={label} htmlFor="name">
            <input
              className={input}
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={this.handleChange}
              name="name"
            />
          </label>
          <label className={label} htmlFor="email">
            <input
              className={input}
              type="email"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={label} htmlFor="message">
            <textarea
              className={input}
              name="message"
              rows="3"
              placeholder="Your Message"
              onChange={this.handleChange}
            />
          </label>
          <ButtonPrimary css="margin-bottom: 32px;" type="submit">
            Submit
          </ButtonPrimary>
        </form>
      </Flex>
    )
  }
}

const Contact = ({ data, location }) => {
  const { markdownRemark: remark } = data
  return (
    <Layout location={location}>
      <Header />
      <div
        css={`
          display: grid;
          -ms-transform: translate(0px, -16vh);
          -webkit-transform: translate(0px, -16vh);
          transform: translate(0px, -16vh);
        `}
      >
        <div
          css={`
            justify-self: center;
            max-width: 732px;
          `}
        >
          <BigCard>
            <Box bg={colors.primaryOld}>
              <Box css="margin: 2.5em">
                <h1>{remark.frontmatter.title}</h1>
                <div
                  css="text-align: left;"
                  dangerouslySetInnerHTML={{ __html: remark.html }}
                />
              </Box>
            </Box>
          </BigCard>
        </div>
      </div>
    </Layout>
  )
}

export const contactQuery = graphql`
  query contactQ {
    markdownRemark(
      fileAbsolutePath: { regex: "src/pages/contact/contact.md/" }
    ) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Contact
