import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/hello';

ReactDOM.render(
  <App compiler="TypeScript" framework="React" bundler="Webpack@2.2.0-rc.3"/>,
  document.getElementById('content')
);
