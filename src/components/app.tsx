import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import GlobalStyle from '../globalStyle';



export const App = (children) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
};

