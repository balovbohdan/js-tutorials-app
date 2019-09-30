import * as React from 'react';

import { Router } from './Router';
import { GlobalStyle } from './GlobalStyle';

export const App = () =>
  <>
    <GlobalStyle />
    <Router />
  </>;
