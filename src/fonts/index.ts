import { css } from 'styled-components'
import { default as GraphikRegularOTF } from './Graphik-400-Regular.otf'
import { default as GraphikMediumOTF } from './Graphik-500-Medium.otf'
import { default as GraphikBoldOTF } from './Graphik-700-Bold.otf'


export const fontStyles = css`
    @import url('https://fonts.googleapis.com/css?family=Inconsolata:400,700&display=swap');

    @font-face {
        font-family: 'GraphikRegular';
        font-weight: 400;
        font-display: swap;
        src: local('Graphik'), url(${GraphikRegularOTF}) format('otf'),
        url(${GraphikRegularOTF}) format('otf');   
    }
    @font-face {
        font-family: 'GraphikMedium';
        font-weight: 500;
        font-display: swap;
        src: local('Graphik'), url(${GraphikMediumOTF}) format('otf'),
        url(${GraphikMediumOTF}) format('otf');   
    }
    @font-face {
        font-family: 'GraphikBold';
        font-weight: 700;
        font-display: swap;
        src: local('Graphik'), url(${GraphikBoldOTF}) format('otf'),
        url(${GraphikBoldOTF}) format('otf');   
    }



`