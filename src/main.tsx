import React from 'react';
import { render } from 'react-dom';
import { normalize } from 'polished';
import { injectGlobal } from 'styled-components';

import Routes from './containers/routes';

injectGlobal`${normalize()}`

render(
  <Routes />,
  document.getElementById('content')
);

if (process.env.preact && process.env.NODE_ENV !== 'production') {
  require('preact/devtools');
}
