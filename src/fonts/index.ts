import { css } from 'styled-components'
import { default as AvenirBookOTF } from './Avenir-Book.otf'
import { default as AvenirMediumOTF } from './Avenir-Medium.otf'
import { default as AvenirBoldOTF } from './Avenir-Heavy.otf'


export const fontStyles = css`
    @import url('https://fonts.googleapis.com/css?family=Inconsolata:400,700&display=swap');

    @font-face {
        font-family: 'AvenirRegular';
        font-weight: 400;
        font-display: swap;
        src: local('Avenir'), url(${AvenirBookOTF}) format('otf'),
        url(${AvenirBookOTF}) format('otf');   
    }
    @font-face {
        font-family: 'AvenirMedium';
        font-weight: 500;
        font-display: swap;
        src: local('Avenir'), url(${AvenirMediumOTF}) format('otf'),
        url(${AvenirMediumOTF}) format('otf');   
    }
    @font-face {
        font-family: 'AvenirBold';
        font-weight: 700;
        font-display: swap;
        src: local('Avenir'), url(${AvenirBoldOTF}) format('otf'),
        url(${AvenirBoldOTF}) format('otf');   
    }



`