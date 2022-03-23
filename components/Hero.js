import Link from 'next/link'
import React from 'react'
import css from 'styled-jsx/css'
import Button from 'components/Button'

function Hero({ heading, subHeading, buttonText, bgImage }) {
  return (
    <>
      <style jsx>{styles}</style>
      <style jsx>{`
        section {
          background-image: url(${bgImage});
          background-repeat: no-repeat;
          background-position: right center;
          background-size: 400px;
          min-height: 500px;
        }
      `}</style>
      <section>
        <div>
          <h1>{heading}</h1>
          <p>{subHeading}</p>
          <Link href="/about">
            <a>{buttonText ? <Button large>{buttonText}</Button> : ''}</a>
          </Link>
        </div>
      </section>
    </>
  )
}

const styles = css`
  div {
    max-width: 580px;
  }
  h1 {
    font-weight: bold;
    font-size: 66px;
  }
  p {
    font-size: 24px;
    font-weight: 300;
    line-height: 40px;
    color: rgba(255, 255, 255, 0.7);
  }
`

export default Hero
