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
      color: 'Mono80',
      // backgroundColor: 'white',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
    },
    body: {
      margin: '0px',
      padding: '0px'
    },
    h1: {
      margin: 0
    },
    p: {
      margin: 0
    },
  }),
  fontStyles
)



export default GlobalStyle;