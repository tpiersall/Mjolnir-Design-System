import React from 'react'
import { theme } from '../src/theme'
import { ThemeProvider } from 'styled-components'
import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import GlobalStyle from '../src/globalStyle';
import '@storybook/addon-console';
import { DocsPage } from '@storybook/addon-docs/blocks';

addDecorator(withA11y)
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
));

configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.tsx$/),
  ],
  module
);
