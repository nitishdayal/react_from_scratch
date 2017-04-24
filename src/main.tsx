import React from 'react';
import { render } from 'react-dom'
import { normalize } from 'polished';
import { injectGlobal } from 'styled-components';
import Routes from './containers/routes';

let root;

injectGlobal`${normalize()}`
function init() {
  root = render(<Routes />, document.getElementById('content'))
}

init();

if (module.hot) module.hot.accept('./containers/routes', init)
