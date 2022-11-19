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
  }
`;

export default GlobalStyle;
