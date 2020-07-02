/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import '../style.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>👋 Said Atrahouch </title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script
            async
            defer
            src="https://scripts.simpleanalyticscdn.com/latest.js"
          ></script>
          <noscript>
            <img
              src="https://queue.simpleanalyticscdn.com/noscript.gif"
              alt=""
            />
          </noscript>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default MyApp
