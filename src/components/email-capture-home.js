/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import jsonp from 'jsonp';
import { validate } from 'email-validator';
import { keyframes } from '@emotion/core';
import hex2rgba from 'hex2rgba';
import typography from '../utils/typography';
import presets from '../utils/presets';
import colors from '../utils/colors';

const { rhythm, options } = typography;

const stripeAnimation = keyframes`
  0%: { background-position: 0 0 };
  100%: { background-position: 30px 60px };
`;

const bodyStyle = css`
  font-size: 0.9em;
  color: ${colors.gray.calm};
  margin-top: ${rhythm(0.5)}
  & a:hover {
    color: ${colors.tech47blue};
  };
`;

const formInputDefaultStyles = css`
  background-color: #fff;
  border: 1px solid ${colors.tech47date};
  border-radius: 20px;
  width: 100%;
  font-size: 0.8em;
  color: ${colors.primary};
  padding: ${rhythm(1 / 5)};
  padding-left: ${rhythm(1)};
  vertical-align: middle;
  transition: all ${presets.animation.speedDefault} ${
  presets.animation.curveDefault
};
  &::placeholder {
    color: ${colors.tech47date};
    opacity: 1;
  },
`;

// Mailchimp endpoint
// From: https://us17.admin.mailchimp.com/lists/integration/embeddedcode?id=XXXXXX
// Where `XXXXXX` is the MC list ID
// Note: we change `/post` to `/post-json`
const MAILCHIMP_URL = `https://tech47.us17.list-manage.com/subscribe/post-json?u=8c8c89f69013835cc96304cae&amp;id=0bcd7855d2`;

class EmailCaptureForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: ``
    };
  }

  // Update state each time user edits their email address
  _handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  // Using jsonp, post to MC server & handle its response
  _postEmailToMailchimp = url => {
    // jsonp lib takes an `endpoint`, {options}, & callback
    jsonp(url, { param: `c` }, (err, data) => {
      // network failures, timeouts, etc
      if (err) {
        this.setState({
          status: `error`,
          msg: err
        });

        // Mailchimp errors & failures
      } else if (data.result !== `success`) {
        this.setState({
          status: `error`,
          msg: data.msg
        });

        // Posted email successfully to Mailchimp
      } else {
        this.setState({
          status: `success`,
          msg: data.msg
        });
      }
    });
  };

  // On form submit, validate email
  // then jsonp to Mailchimp, and update state
  _handleFormSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    // If email is not valid, break early
    if (!validate(this.state.email)) {
      this.setState({
        status: `error`,
        msg: `"${this.state.email}" is not a valid email address`
      });
      return;
    }

    // Construct the url for our jsonp request
    // Query params must be in CAPS
    // Capture pathname for better email targeting
    const url = `${MAILCHIMP_URL}
      &EMAIL=${encodeURIComponent(this.state.email)}
      &PATHNAME=${window.location.pathname}
    `;

    this.setState(
      {
        msg: null,
        status: `sending`
      },
      // jsonp request as setState callback
      this._postEmailToMailchimp(url)
    );
  };

  render() {
    return (
      <div
        css={css`
          margin-top: rhythm(2);
          padding-top: ${rhythm(0.5)};
        `}
      >
        {this.state.status === `success` ? (
          <div className={bodyStyle}>
            Thank you! Youʼll receive your first email shortly.
          </div>
        ) : (
          <div>
            <form
              id="email-capture"
              method="post"
              noValidate
              css={{ margin: 0 }}
            >
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="email address"
                  onChange={this._handleEmailChange}
                  css={css`
                    ${formInputDefaultStyles};
                    &:focus {
                      border-color: ${colors.tech47pink};
                      outline: 0;
                      box-shadow: 0 0 0 0.2rem
                        ${hex2rgba(colors.tech47pinkhex, 0.25)};
                    }
                  `}
                />
                <button
                  type="submit"
                  onClick={this._handleFormSubmit}
                  css={css`
                    ${formInputDefaultStyles};
                    color: ${colors.tech47white};
                    background-color: ${colors.tech47pink};
                    border-color: ${colors.tech47pink};
                    cursor: pointer;
                    margin-top: ${rhythm(1 / 2)};
                    &:hover,
                    &:focus {
                      background-size: 30px 30px;
                      background-color: ${colors.tech47purple};
                      background-image: linear-gradient(
                        45deg,
                        rgba(0, 0, 0, 0.1) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(0, 0, 0, 0.1) 50%,
                        rgba(0, 0, 0, 0.1) 75%,
                        transparent 75%,
                        transparent
                      );
                      color: #fff;
                      animation: ${stripeAnimation} 2.8s linear infinite;
                    }
                    &:focus {
                      outline: 0;
                      box-shadow: 0 0 0 0.2rem ${hex2rgba(colors.primary, 0.25)};
                    }
                  `}
                >
                  Subscribe
                </button>
                {this.state.status === `error` && (
                  <div
                    dangerouslySetInnerHTML={{ __html: this.state.msg }}
                    className={bodyStyle}
                  />
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default EmailCaptureForm;
