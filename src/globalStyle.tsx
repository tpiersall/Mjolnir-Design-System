import { createGlobalStyle } from 'styled-components';
import css from '@styled-system/css';
import { fontStyles } from './fonts';

const GlobalStyle = createGlobalStyle(
  css({
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      fontSize: 3,
      fontFamily: 'normal',
      color: 'mono80',
      backgroundColor: 'white',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
    },
    body: {
      margin: '0px',
      padding: '0px'
    },
  }),
  fontStyles
)



export default GlobalStyle;