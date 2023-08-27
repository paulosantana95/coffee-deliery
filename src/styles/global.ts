import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 0.2px ${(props) => props.theme.colors['purple-dark']};
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: ${(props) => props.theme.fonts.regular}, sans-serif;
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSizes["text-m"]};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

`