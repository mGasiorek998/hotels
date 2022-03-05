import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  *, *::after, *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  };

  body {
    font-family: 'Montserrat';
  }
`;

export default GlobalStyle;
