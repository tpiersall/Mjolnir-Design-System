import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyle from './globalStyle';

interface MjolnirProviderProps {
    // TODO: type Theme
    theme?: any;
};

export const MjolnirProvider: FC<MjolnirProviderProps> = ({ theme, children }) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                {children}
            </>
        </ThemeProvider>
    )
}