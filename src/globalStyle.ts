import { createGlobalStyle } from 'styled-components';
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
 
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|PT+Mono&display=swap');
  * {
    box-sizing: border-box;
    ::selection {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

  }
  body {
    font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', sans-serif;
    font-weight: 500; 
  }
`;

export default GlobalStyle;