import DevTools from 'mobx-react-devtools';
import React from 'react';

import { normalize } from 'polished';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';

import Routes from './routes';

let init: () => void;
const content = document.getElementById('content');

injectGlobal`${normalize()}`;

init = () => {
  render(
    <AppContainer>
      <Routes />
    </AppContainer>,
    content
  );
};

if (process.env.preact) {
  const p = require('preact').render;
  let root;

  init = () => {
    root = p(
      <Routes />,
      document.body,
      root
    );
  };
  if (module.hot) {
    require('preact/devtools');
  }
}

init();

if (module.hot) { module.hot.accept('./routes', () => requestAnimationFrame(init)); }
