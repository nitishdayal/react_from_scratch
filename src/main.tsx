import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/hello';

ReactDOM.render(
  <App compiler="TypeScript" framework="React"/>,
  document.getElementById('content')
);
