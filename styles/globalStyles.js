import css from 'styled-jsx/css'
import theme from 'styles/theme'

export default css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Cabin, Arial, sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Quicksand, Arial, sans-serif;
  }

  h3 {
    font-size: 42px;
  }

  h5 {
    font-size: 22px;
  }

  a {
    color: ${theme.colors.link};
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .flex {
    display: flex;
  }

  .justify-space-evenly {
    justify-content: space-evenly;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .col {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    padding-left: 10px;
    padding-right: 10px;
  }
  .col-60 {
    width: 60%;
  }
  .col-40 {
    width: 40%;
  }
`
