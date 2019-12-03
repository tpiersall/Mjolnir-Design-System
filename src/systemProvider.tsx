import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components';
import { theme as defaultTheme } from './theme';
import GlobalStyle from './globalStyle';


interface SystemProviderProps {
    theme?: any
}

export const SystemProvider: FC<SystemProviderProps> = ({ theme = defaultTheme, children }) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                {children}
            </>
        </ThemeProvider>
    )
}
