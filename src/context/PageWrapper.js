import React from 'react';

import { ThemeProvider } from 'styled-components';

// Context
import { PageProvider } from '../context/PageContext';

// Styles
import theme from '../styles/theme';

const PageWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <PageProvider>{children}</PageProvider>
  </ThemeProvider>
);

export default PageWrapper;
