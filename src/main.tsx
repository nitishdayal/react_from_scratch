import React from 'react';
import { render } from 'react-dom';

import App from './components/hello';
import Root from './containers/root'


const RootElement = (
  <Root>
    <App bundler="Webpack" compiler="TypeScript" framework="React" />
  </Root>
)

render(
  RootElement,
  document.getElementById('content')
);
