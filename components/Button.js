import React from 'react'
import css from 'styled-jsx/css'
import theme from 'styles/theme'

function Button({ children, large, small, ...rest }) {
  return (
    <>
      <style jsx>{styles}</style>
      <button
        className={large ? 'large' : small ? 'small' : 'normal'}
        {...rest}
      >
        {children}
      </button>
    </>
  )
}

const styles = css`
  button {
    background-color: transparent;
    border: 1px solid ${theme.colors.link};
    outline: none;
    color: ${theme.colors.text};
    transition: all 0.4s;
    cursor: pointer;
  }
  .normal {
    font-size: 18px;
    border-radius: 20px;
    font-weight: 600;
    padding: 10px 20px;
  }
  .large {
    font-size: 24px;
    border-radius: 50px;
    font-weight: 600;
    padding: 18px 50px;
    margin-top: 40px;
  }
  .small {
    font-size: 16px;
    border-radius: 100%;
    font-weight: 600;
    height: 24px;
    width: 24px;
    vertical-align: middle;
    text-align: center;
    margin-left: 8px;
  }
  button:hover {
    transform: scale(1.04);
  }
  button:focus {
    box-shadow: 3px 3px 10px rgba(120, 118, 118, 0.7);
  }
`
export default Button
