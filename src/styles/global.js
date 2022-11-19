import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  root,
  html,
  body {
    width: 375px;
    height: 100%;
    margin: 0 auto;
    font-size: 10px; 
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  button{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent; 
    border: none;
  }
`;

export default GlobalStyle;
