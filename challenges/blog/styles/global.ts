import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap');

  :root {
    --white: #FFF;
    --white-200: #F9F9F9;

    --purple: #574AE8;

    --blue-light: #3EA1DB;
    --blue-dark: #1A202C;

    --gray: #717171;

  }

  *::selection {
    background: #3EA1DB;
    color: #F9F9F9;
  }
  body {
    background: ${(props) => props.theme.bgPrimary};
    color: ${props => props.theme.fontSecond}; 
    font-weight: normal;
    font-family: 'Lexend Deca', sans-serif;
  }
  body > #app .container {
    max-width: 56.25rem;
  }
  input, button, select, textarea {
    font-family: 'Lexend Deca', sans-serif;
  }

`