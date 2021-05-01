import { createGlobalStyle } from 'styled-components';
import { LIGHT_GREY, CYAN, GREY } from './colorsPalette';

export const GlobalStyles = createGlobalStyle`
    html {
      overflow-x: hidden;
      --font-size-small: 16px;
      --font-size-medium: 22px;
      --background-color-main: ${GREY};

      @media (min-width: 1024px) {
        --font-size-small: 21px;
        --font-size-medium: 24px;
      }
    }
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: rgba(29, 29, 29, 35);
      position: relative;
      overflow-x: hidden;
    }
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
    a:link{
      text-decoration: none;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
    -webkit-text-fill-color: ${CYAN};
    -webkit-box-shadow: 0 0 0px 1000px ${LIGHT_GREY} inset;
`;