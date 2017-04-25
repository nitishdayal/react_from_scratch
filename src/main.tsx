// tslint:disable
import { normalize } from 'polished';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';

import Routes from './containers/routes';

const content = document.getElementById('content');
let init: () => void;

injectGlobal`${normalize()}`

init = () => {
  render(
    <AppContainer>
      <Routes />
    </AppContainer>,
    content
  );
};

if (process.env.preact) {
  const p = require('preact').render
  let root;

  init = () => {
    root = p(
      <Routes />,
      document.body,
      root
    )
  }
  if (module.hot) {
    require('preact/devtools')
  }
}

if (module.hot) module.hot.accept('./containers/routes', () => requestAnimationFrame(init))

init();
