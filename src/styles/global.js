import { createGlobalStyle } from "styled-components";

//create styled-components global style
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
    border: none;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    line-height: 1.5;
  }
  button:disabled{
    cursor: not-allowed;
    filter: brightness(.8);
    transition: filter .2s;
  }
  `;