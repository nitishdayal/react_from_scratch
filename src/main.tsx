import DevTools from 'mobx-react-devtools';
import React from 'react';

import { normalize } from 'polished';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';

import Routes from './routes';
import Store from './store/listItems';

// tslint:disable
injectGlobal`${normalize()}`;
// tslint:enable
const content = document.getElementById('content');

let init = () => {
  render(
    <AppContainer>
      <Routes store={Store} />
    </AppContainer>,
    content
  );
};

if (process.env.preact) {
  const p = require('preact').render;
  let root;

  init = () => {
    root = p(
      <Routes store={Store} />,
      document.body,
      root
    );
  };
  if (process.env.NODE_ENV === 'develop') {
    require('preact/devtools');
  }
}

init();

if (module.hot) { module.hot.accept('./routes', () => requestAnimationFrame(init)); }
