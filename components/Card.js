import React from 'react'
import css from 'styled-jsx/css'
import Image from 'next/image'
import Button from 'components/Button'

function Card({ image, alt, title, text, buttonText, buttonLink }) {
  return (
    <>
      <style jsx>{styles}</style>
      <div className="card">
        <div className="cardImage">
          <Image src={image} alt={alt} width="400" height="250" />
        </div>
        <div className="cardBody">
          <h3>{title}</h3>
          <p>{text}</p>
          <a href={buttonLink}>
            <Button>{buttonText}</Button>
          </a>
        </div>
      </div>
    </>
  )
}

const styles = css`
  .card {
    border: 1px solid #374151;
    background: transparent;
    border-radius: 5px;
    width: 350px;
    margin-top: 30px;
    margin-bottom: 30px;
    transition: all 0.3s;
    margin-left: 20px;
    margin-right: 20px;
  }
  .card:hover {
    box-shadow: 3px 3px 20px rgb(80 78 78 / 30%);
  }
  .cardBody {
    padding: 20px;
  }
  h3 {
    margin: 0;
    font-size: 30px;
  }
  p {
    color: #9ca3af;
    line-height: 24px;
    font-size: 18px;
    margin-bottom: 30px;
  }
`

export default Card
